'use client';
import { productsData } from '../../../utils/getProducts';
import { useProductsContext } from '@/context/products/ProductsContextProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { FadeLoader } from 'react-spinners';

const StyleSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

const StyleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 150px;

  button {
    width: 120px;
    height: 40px;
    border-radius: 90px;
    border: none;
    background-color: rgba(242, 242, 242, 1);
    font-size: 12px;
    font-weight: 800;
    line-height: 14.4px;
    cursor: pointer;
  }
`;

const StyleLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
type ProductType = {
  id: number;
  name: string;
  barCode: string;
  description: string | null;
  sellType: string | null;
  imageUrl: string;
  parentCategoryName: string;
  [key: string]: any;
};

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
      {isProductsLoading ? (
        <StyleLoaderContainer>
          <FadeLoader color="rgba(236, 94, 42, 1)" />
        </StyleLoaderContainer>
      ) : (
        <>
          {products?.map((item) => (
            <Product key={item.id} item={item} />
          ))}
          {products.length > 11 && (
            <StyleButtonContainer>
              <button onClick={handleSeeMoreClick}>ნახე მეტი</button>
            </StyleButtonContainer>
          )}
        </>
      )}
    </StyleSection>
  );
};

export default Products;
