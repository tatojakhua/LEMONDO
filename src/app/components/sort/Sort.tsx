'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import down from '../../assets/selectDown.png';
import filter from '../../assets/filter.png';
import MainLayout, {
  StyleSelectBTN,
  StyleSelectBTNTEXT,
  StyleSelectMenu,
  StyleUlOptions,
  StyledDiv,
  StyledOptionSpan,
} from './MainLayout';
import './sort.css';
import { optionArray } from '@/constants';

const StyleSection = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
  height: 92px;

  @media screen and (max-width: 1020px) {
    height: 59px;
  }
`;

const MobileOnlySection = styled(StyleSection)`
  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

const StyleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 157px;
  height: 32px;
  border-radius: 30px;
  background-color: rgba(242, 242, 242, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  cursor: pointer;
`;

interface SortProps {
  setIsFilterHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sort: React.FC<SortProps> = ({ setIsFilterHidden }) => {
  const [selectValue, setselectValue] = useState<string>('დალაგება');
  const [isFilterMenuHidden, setisFilterMenuHidden] = useState<boolean>(false);

  const handleFilterCLick = () => {
    setIsFilterHidden((prev) => !prev);
  };

  return (
    <>
      <StyleSection>
        <MainLayout />
      </StyleSection>
      <MobileOnlySection>
        <StyleSelectMenu
          $showitem="true"
          onClick={() => setisFilterMenuHidden((prev: boolean) => !prev)}
        >
          <StyleSelectBTN>
            <StyleSelectBTNTEXT>{selectValue}</StyleSelectBTNTEXT>
            <Image
              src={down}
              alt="down-button"
              style={{
                width: '12px',
                height: '7px',
                transition: '0.3s',
                transform: isFilterMenuHidden ? 'rotate(-180deg)' : 'none',
              }}
            />
          </StyleSelectBTN>
          <StyleUlOptions $showdisplay={isFilterMenuHidden.toString()}>
            {optionArray.map((select) => (
              <StyledOptionSpan
                key={select.value}
                value={select.value}
                onClick={() => setselectValue(select.value)}
              >
                {select.text}
              </StyledOptionSpan>
            ))}
          </StyleUlOptions>
        </StyleSelectMenu>
        <StyleFilter>
          <Image
            src={filter}
            alt="filter"
            style={{ width: '20px', height: '20px', margin: '0 15px' }}
          />
          <StyleSelectBTNTEXT onClick={handleFilterCLick}>
            ფილტრი
          </StyleSelectBTNTEXT>
        </StyleFilter>
        <StyledDiv />
      </MobileOnlySection>
    </>
  );
};

export default Sort;
