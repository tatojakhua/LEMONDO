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

  const sortProducts = (products: ProductsType[]) => {
    switch (state.sort) {
      case 'პოპულარული':
        return products.filter((product) => product.isFavorite);
      case 'კლებადობით':
        return products.sort((a, b) => b.price - a.price);
      case 'ზრდადობით':
        return products.sort((a, b) => a.price - b.price);
      case 'A-Z':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'Z-A':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case 'ფასდაკლება':
        return products.filter((product) => product.hasDiscount);
      default:
        return products;
    }
  };

  useEffect(() => {
    if (state.priceRange[1]) {
      setIsProductsLoading(true);
      const filter = state.filterData.join(',');
      productsData(limit, state.priceRange, filter)
        .then((data) => {
          const sortedProducts = sortProducts(data.products);
          setProducts(sortedProducts);
        })
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
