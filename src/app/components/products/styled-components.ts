import styled from 'styled-components';
import row from '../../assets/mobileRow.png';
import cart from '../../assets/cart.png';

//--Products--//
export const StyleSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const StyleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin-top: 40px;

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

export const StyleLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

//--Product--//
export const StyleMainContainer = styled.div`
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

export const StyleTextContainer = styled.div`
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

export const StyleButtonsContainer = styled.div`
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

export const StyledImageRow = styled.img.attrs({
  src: row.src,
  alt: 'row',
})`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  opacity: 0.8;
`;

export const StyledImageCart = styled.img.attrs({
  src: cart.src,
  alt: 'cart',
})`
  width: 14px;
  height: 14px;
  opacity: 0.8;
  margin-right: 5px;
`;

export const StyledProductImage = styled.img`
  width: 160px;
  height: 170px;
  border-radius: 8px;
`;
