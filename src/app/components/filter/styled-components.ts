import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//-- Filter --//
export const StyleSection = styled.section<{ $isFilterHidden: string }>`
  width: 450px;
  height: 100%;
  max-height: 2300px;

  @media screen and (max-width: 1020px) {
    display: ${(props) =>
      props.$isFilterHidden === 'true' ? 'block' : 'none'};
    width: 230px;
    position: fixed;
    right: 0;
    top: 70px;
    background-color: rgba(255, 255, 255, 1);
    padding: 0 20px;
    z-index: 10;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const StyleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyleHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (max-width: 1020px) {
    width: 230px;
  }
`;

export const StyleSectionTitle = styled.h2`
  width: 100%;
  height: 20px;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const StyleFilterHead = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 40px;
`;

export const StyleTitle = styled.h2`
  width: 72px;
  height: 19px;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 18px;
  line-height: 19.2px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const StyleClear = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

export const StyleTrashcanTitle = styled.h3`
  width: 80px;
  height: 14px;
  font-family: FiraGo;
  font-weight: 500;
  font-size: 13px;
  line-height: 14.4px;
  opacity: 0.9;
`;

export const StyleCloseBTN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
`;
//--Price Slider --//
export const GlobalStyles = createGlobalStyle`
  .ant-slider-track,
  .ant-slider-handle,
  .ant-slider-handle::after {
    background: rgba(236, 94, 42, 1) !important;
    box-shadow: 0 0 0 0px rgba(236, 94, 42, 1) !important;
    border-radius: 15px;
  }
  
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: rgba(236, 94, 42, 1) !important;
    border-color: rgba(236, 94, 42, 1) !important;
  }
  
  .ant-checkbox {
    border: 1px solid;
  }
  
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  
  @media screen and (max-width: 1020px) {
    .valute {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

export const StylePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StylePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 154px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid rgba(236, 94, 42, 1);
  margin-top: 20px;
  @media screen and (max-width: 1020px) {
    width: 100px;
  }
`;

export const StylePriceText = styled.h2`
  position: relative;
  width: 30px;
  height: 20px;
  opacity: 0.6;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  @media screen and (max-width: 1020px) {
    font-size: 10px;
    margin-left: 10px;
  }
`;

export const StylePriceValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StylePriceValue = styled.input`
  width: 47px;
  height: 20px;
  font-family: FiraGO;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  border: none;
  text-align: right;
  outline: none;
  @media screen and (max-width: 1020px) {
    font-size: 14px;
  }
`;
//-- CheckBox --//
export const StyleMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleShowMore = styled.button`
  text-align: start;
  width: 150%;
  height: 20px;
  background: none;
  border: none;
  margin-left: -10px;
  font-family: FiraGO;
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  color: rgba(236, 94, 42, 1);
  cursor: pointer;
`;
