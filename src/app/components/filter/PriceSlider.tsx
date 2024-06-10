import React from 'react';
import { Slider } from 'antd';
import {
  GlobalStyles,
  StylePrice,
  StylePriceContainer,
  StylePriceText,
  StylePriceValue,
  StylePriceValueContainer,
} from './styled-components';
import { PriceSliderProps } from './interface-type';

const PriceSlider: React.FC<PriceSliderProps> = ({
  sliderValue,
  setSliderValue,
}) => {
  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue([value[0], value[1]]);
    }
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0), sliderValue[1]);
    setSliderValue([value, sliderValue[1]]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Math.min(Number(e.target.value), 22020));
    setSliderValue([sliderValue[0], value]);
  };

  return (
    <>
      <GlobalStyles />
      <Slider
        range
        value={sliderValue}
        max={22020}
        onChange={handleSliderChange}
      />
      <StylePriceContainer>
        <StylePrice>
          <StylePriceText>MIN</StylePriceText>
          <StylePriceValueContainer>
            <StylePriceValue
              type="number"
              value={sliderValue[0]}
              onChange={handleMinInputChange}
            />
            <span className="valute">₾</span>
          </StylePriceValueContainer>
        </StylePrice>
        <StylePrice>
          <StylePriceText>MAX</StylePriceText>
          <StylePriceValueContainer>
            <StylePriceValue
              type="number"
              value={sliderValue[1]}
              onChange={handleMaxInputChange}
            />
            <span className="valute">₾</span>
          </StylePriceValueContainer>
        </StylePrice>
      </StylePriceContainer>
    </>
  );
};

export default PriceSlider;
