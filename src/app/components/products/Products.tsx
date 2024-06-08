'use client';
import { productsData } from '@/api/getProducts';
import { useProductsContext } from '@/context/products/ProductsContextProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

// Define the Product type
type ProductType = {
  id: number;
  name: string;
  barCode: string;
  description: string | null;
  sellType: string | null;
  [key: string]: any;
};

const StyleSection = styled.section`
  width: 100%;
  height: auto;
  border: 1px solid red;
`;

const Products = () => {
  const { state } = useProductsContext();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [error, setError] = useState('');
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    if (state.priceRange[1]) {
      setIsProductsLoading(true);
      const filter = state.filterData.join(',');
      productsData(limit, state.priceRange, filter)
        .then((data) => setProducts(data.products))
        .catch((err) => setError(err.message))
        .finally(() => setIsProductsLoading(false));
    }
  }, [state, limit]);

  const handleSeeMoreClick = () => {
    setLimit((prevLimit) => prevLimit + 12);
  };

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <StyleSection>
      {isProductsLoading && <h1>Loading...</h1>}
      {products?.map((item) => (
        <Product key={item.id} item={item} />
      ))}
      <button onClick={handleSeeMoreClick}>ნახე მეტ</button>
    </StyleSection>
  );
};

export default Products;
