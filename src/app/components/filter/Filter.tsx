'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import trashcan from '../../assets/trash.png';
import down from '../../assets/selectDown.png';
import close from '../../assets/close.png';
import PriceSlider from './PriceSlider';
import CheckBox from './Checkbox';
import { StyledDiv } from '../sort/MainLayout';
import { filterData } from '@/api/getFilterData';

const StyleSection = styled.section<{ $isFilterHidden: string }>`
  width: 450px;
  height: 2300px;
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
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: start;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyleHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (max-width: 1020px) {
    width: 230px;
  }
`;

const StyleSectionTitle = styled.h2`
  width: 100%;
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

type FilterValue = { id: number; value: string };

interface FilterType {
  name: string;
  values: FilterValue[];
}

const Filter: React.FC<FIlterProps> = ({
  isFilterHidden,
  setIsFilterHidden,
}) => {
  const [filterState, setFilterState] = useState<FilterType[]>([]);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 5399]);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const [isPriceHidden, setIsPriceHidden] = useState(true);
  const [filterVisibility, setFilterVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    filterData()
      .then((data) => {
        setSliderValue([data.minPrice, data.maxPrice]);
        const filteredSpecifications = data.specifications.filter(
          (_: any, index: number) => ![2, 5, 7].includes(index)
        );
        setFilterState(filteredSpecifications);
      })
      .catch((err) => console.log(err.message))
      .finally(() => console.log('finally block'));
  }, []);

  const handleCleanFilter = () => {
    setSliderValue([0, 22020]);
    setCheckedValues([]);
  };

  const handleCloseBTN = () => {
    setIsFilterHidden(false);
  };

  const togglePriceVisibility = () => {
    setIsPriceHidden((prev) => !prev);
  };

  const toggleFilterVisibility = (name: string) => {
    setFilterVisibility((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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
        <StyleClear onClick={handleCleanFilter}>
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
          <StyleTrashcanTitle>გასუფთავება</StyleTrashcanTitle>
        </StyleClear>
        <StyledDiv $full="true" />
      </StyleFilterHead>

      <StyleSectionContainer onClick={togglePriceVisibility}>
        <StyleHead>
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
          />
        </StyleHead>
      </StyleSectionContainer>
      {isPriceHidden && (
        <PriceSlider
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      )}

      {filterState.map((item) => (
        <StyleSectionContainer key={item.name}>
          <StyleHead>
            <StyleSectionTitle>{item.name}</StyleSectionTitle>
            <Image
              src={down}
              alt="down"
              style={{
                width: '15px',
                height: '10px',
                transition: '0.3s',
                transform: !filterVisibility[item.name]
                  ? 'rotate(-180deg)'
                  : 'none',
                cursor: 'pointer',
              }}
              onClick={() => toggleFilterVisibility(item.name)}
            />
          </StyleHead>
          {!filterVisibility[item.name] && (
            <CheckBox
              values={item.values}
              checkedValues={checkedValues}
              setCheckedValues={setCheckedValues}
            />
          )}
        </StyleSectionContainer>
      ))}
    </StyleSection>
  );
};

export default Filter;
