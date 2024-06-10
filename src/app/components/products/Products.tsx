'use client';
import { productsData } from '../../../utils/getProducts';
import { useProductsContext } from '@/context/products/ProductsContextProvider';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { FadeLoader } from 'react-spinners';
import {
  StyleButtonContainer,
  StyleLoaderContainer,
  StyleSection,
} from './styled-components';
import { ProductsType } from './interface-type';

const Products = () => {
  const { state } = useProductsContext();
  const [products, setProducts] = useState<ProductsType[]>([]);
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
