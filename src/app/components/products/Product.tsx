import React from 'react';
import {
  StyleButtonsContainer,
  StyleMainContainer,
  StyleTextContainer,
  StyledImageCart,
  StyledImageRow,
  StyledProductImage,
} from './styled-components';
import { ProductProps } from './interface-type';

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <StyleMainContainer>
      <StyledProductImage src={item.imageUrl} alt={item.parentCategoryName} />

      <StyleTextContainer>
        <h3>{item.price} ₾</h3>
        <h5>
          თვეში:<span>{item.subCategoryId} ₾</span>-დან
        </h5>
        <h4>{item.name}</h4>
      </StyleTextContainer>
      <StyleButtonsContainer>
        <div>
          <StyledImageRow />
        </div>
        <div>
          <StyledImageCart />
          <h4>დამატება</h4>
        </div>
      </StyleButtonsContainer>
    </StyleMainContainer>
  );
};

export default Product;
