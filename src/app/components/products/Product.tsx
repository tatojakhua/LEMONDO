import Image from 'next/image';
import React from 'react';
import row from '../../assets/mobileRow.png';
import cart from '../../assets/cart.png';
import styled from 'styled-components';

const StyleMainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 303px;
  box-sizing: border-box;
  flex: 1 1 25%;
  max-width: 25%;
  padding-left: 30px;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    flex: 1 1 50%;
    max-width: 50%;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const StyleTextContainer = styled.div`
  h3 {
    width: 82px;
    height: 19px;
    font-weight: 600;
    line-height: 19.3px;
    font-size: 16px;
  }

  h5 {
    width: 66px;
    height: 14px;
    font-weight: 600;
    font-size: 8px;
    line-height: 14px;

    span {
      color: rgba(236, 94, 42, 1);
    }
  }

  h4 {
    width: 160px;
    height: 36px;
    opacity: 0.8;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
`;

const StyleButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;

    &:first-of-type {
      background-color: rgba(242, 242, 242, 1);
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }

    &:nth-of-type(2) {
      width: 110px;
      height: 40px;
      border-radius: 4px;
      background-color: rgba(242, 143, 106, 1);
    }

    &:hover {
      opacity: 0.7;
    }
  }

  h4 {
    width: 59px;
    height: 20px;
    opacity: 0.8;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    margin: 0;
  }
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

type ProductProps = {
  item: ProductType;
};

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <StyleMainContainer>
      <Image
        src={item.imageUrl}
        alt={item.parentCategoryName}
        width={160}
        height={170}
        style={{ borderRadius: '8px' }}
      />
      <StyleTextContainer>
        <h3>{item.price} ₾</h3>
        <h5>
          თვეში:<span>{item.subCategoryId} ₾</span>-დან
        </h5>
        <h4>{item.name}</h4>
      </StyleTextContainer>
      <StyleButtonsContainer>
        <div>
          <Image
            src={row}
            alt="row"
            style={{ width: '14px', height: '14px', opacity: '0.5' }}
          />
        </div>
        <div>
          <Image
            src={cart}
            alt="cart"
            style={{
              width: '14px',
              height: '14px',
              opacity: '0.8',
              marginRight: '5px',
            }}
          />
          <h4>დამატება</h4>
        </div>
      </StyleButtonsContainer>
    </StyleMainContainer>
  );
};

export default Product;
