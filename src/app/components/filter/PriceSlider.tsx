import React from 'react';
import styled from 'styled-components';
import { Slider } from 'antd';
import './PriceSlider.css';

const StylePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StylePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 154px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid rgba(236, 94, 42, 1);
  margin-top: 20px;
`;

const StylePriceText = styled.h2`
  position: relative;
  width: 30px;
  height: 20px;
  opacity: 0.6;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const StylePriceValueContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StylePriceValue = styled.input`
  width: 47px;
  height: 20px;
  font-family: FiraGO;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  border: none;
  text-align: right;
  outline: none;
`;

interface PriceSliderProps {
  sliderValue: [number, number];
  setSliderValue: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const PriceSlider: React.FC<PriceSliderProps> = ({
  sliderValue,
  setSliderValue,
}) => {
  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue(value as [number, number]);
    }
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(Number(e.target.value), 0));
    setSliderValue([value, sliderValue[1]]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Math.min(Number(e.target.value), 5399));
    setSliderValue([sliderValue[0], value]);
  };

  return (
    <>
      <Slider
        range={{ draggableTrack: true }}
        value={sliderValue}
        max={5399}
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
            <span>₾</span>
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
            <span>₾</span>
          </StylePriceValueContainer>
        </StylePrice>
      </StylePriceContainer>
    </>
  );
};

export default PriceSlider;
