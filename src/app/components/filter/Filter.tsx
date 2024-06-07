'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import trashcan from '../../assets/trash.png';
import down from '../../assets/selectDown.png';
import close from '../../assets/close.png';
import PriceSlider from './PriceSlider';
import ReleaseData from './ReleaseData';
import Weight from './Weight';
import ScreenSize from './ScreenSize';
import { StyledDiv } from '../sort/MainLayout';

const StyleSection = styled.section<{ $isFilterHidden: string }>`
  width: 450px;
  height: 1417px;
  @media screen and (max-width: 1020px) {
    display: ${(props) => (props.$isFilterHidden == 'true' ? 'block' : 'none')};
    width: 230px;
    position: absolute;
    right: 0;
    top: 50px;
    background-color: rgba(255, 255, 255, 1);
    padding: 0 20px;
  }
`;

const StyleSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyleSectionTitle = styled.h2`
  width: 265px;
  height: 20px;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const StyleFilterHead = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 40px;
`;

const StyleTitle = styled.h2`
  width: 72px;
  height: 19px;
  font-family: FiraGo;
  font-weight: 600;
  font-size: 18px;
  line-height: 19.2px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const StyleClear = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;

const StyleTrashcanTitle = styled.h3`
  width: 80px;
  height: 14px;
  font-family: FiraGo;
  font-weight: 500;
  font-size: 13px;
  line-height: 14.4px;
  opacity: 0.9;
`;

const StyleCloseBTN = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
`;

interface FIlterProps {
  isFilterHidden: boolean;
  setIsFilterHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FIlterProps> = ({
  isFilterHidden,
  setIsFilterHidden,
}) => {
  const [cleanFilter, setCleanFilter] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 5399]);
  const [year, setYear] = useState<string[]>([]);
  const [weight, setWeight] = useState<string[]>([]);
  const [screenSize, setScreenSize] = useState<string[]>([]);

  const [isPriceHidden, setIsPriceHidden] = useState(true);
  const [isYearHidden, setIsYearHidden] = useState(true);
  const [isWeightHidden, setIsWeightHidden] = useState(true);
  const [isScreenSizeHidden, setIsScreenSizeHidden] = useState(true);

  console.log(sliderValue, year, weight, screenSize);

  const restFilterArray: Array<string> = [
    'სიმ ბარათი-SIM',
    'ოპერაციული სისტემა',
    'ჩიპსეტი',
    'პროცესორი',
    'გრაფიკული პროცესორი',
    'შიდა მეხსიერება',
    'ოპერატიული მეხსიერება',
  ];

  useEffect(() => {
    setSliderValue([0, 5399]);
    setYear([]);
    setWeight([]);
    setScreenSize([]);
    setCleanFilter(false);
  }, [cleanFilter]);

  const handleCleanFIlter = () => {
    setCleanFilter((prev) => !prev);
  };

  const handleCloseBTN = () => {
    setIsFilterHidden(false);
  };

  const togglePriceVisibility = () => {
    setIsPriceHidden((prev) => !prev);
  };

  const toggleYearVisibility = () => {
    setIsYearHidden((prev) => !prev);
  };

  const toggleWeightVisibility = () => {
    setIsWeightHidden((prev) => !prev);
  };

  const toggleScreenSizeVisibility = () => {
    setIsScreenSizeHidden((prev) => !prev);
  };

  return (
    <StyleSection $isFilterHidden={isFilterHidden.toString()}>
      <StyleFilterHead>
        <StyleCloseBTN onClick={handleCloseBTN}>
          {isFilterHidden && (
            <Image
              src={close}
              alt="close"
              style={{ width: '12px', height: '12.12px', cursor: 'pointer' }}
            />
          )}
          <StyleTitle>ფილტრი</StyleTitle>
        </StyleCloseBTN>
        <StyleClear>
          <Image
            src={trashcan}
            alt="trashcan"
            style={{
              width: '14px',
              height: '16.6px',
              opacity: '0.6',
              marginRight: '5px',
            }}
          />
          <StyleTrashcanTitle onClick={handleCleanFIlter}>
            გასუფთავება
          </StyleTrashcanTitle>
        </StyleClear>
        <StyledDiv $full="true" />
      </StyleFilterHead>

      <StyleSectionContainer>
        <StyleSectionTitle>ფასი</StyleSectionTitle>
        <Image
          src={down}
          alt="down"
          style={{
            width: '15px',
            height: '10px',
            transition: '0.3s',
            transform: isPriceHidden ? 'rotate(-180deg)' : 'none',
            cursor: 'pointer',
          }}
          onClick={togglePriceVisibility}
        />
      </StyleSectionContainer>
      {isPriceHidden && (
        <PriceSlider
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      )}

      <StyleSectionContainer>
        <StyleSectionTitle>გამოშვების თარიღი</StyleSectionTitle>
        <Image
          src={down}
          alt="down"
          style={{
            width: '15px',
            height: '10px',
            transition: '0.3s',
            transform: isYearHidden ? 'rotate(-180deg)' : 'none',
            cursor: 'pointer',
          }}
          onClick={toggleYearVisibility}
        />
      </StyleSectionContainer>
      {isYearHidden && <ReleaseData year={year} setYear={setYear} />}

      <StyleSectionContainer>
        <StyleSectionTitle>წონა</StyleSectionTitle>
        <Image
          src={down}
          alt="down"
          style={{
            width: '15px',
            height: '10px',
            transition: '0.3s',
            transform: isWeightHidden ? 'rotate(-180deg)' : 'none',
            cursor: 'pointer',
          }}
          onClick={toggleWeightVisibility}
        />
      </StyleSectionContainer>
      {isWeightHidden && (
        <Weight checkedItems={weight} setCheckedItems={setWeight} />
      )}
      <StyleSectionContainer>
        <StyleSectionTitle>ეკრანის ზომა</StyleSectionTitle>
        <Image
          src={down}
          alt="down"
          style={{
            width: '15px',
            height: '10px',
            transition: '0.3s',
            transform: isScreenSizeHidden ? 'rotate(-180deg)' : 'none',
            cursor: 'pointer',
          }}
          onClick={toggleScreenSizeVisibility}
        />
      </StyleSectionContainer>
      {isScreenSizeHidden && (
        <ScreenSize screenSize={screenSize} setScreenSize={setScreenSize} />
      )}
      {restFilterArray.map((item) => (
        <StyleSectionContainer key={item}>
          <StyleSectionTitle>{item}</StyleSectionTitle>
          <Image
            src={down}
            alt="down"
            style={{
              width: '15px',
              height: '10px',
              cursor: 'pointer',
            }}
          />
        </StyleSectionContainer>
      ))}
    </StyleSection>
  );
};

export default Filter;
