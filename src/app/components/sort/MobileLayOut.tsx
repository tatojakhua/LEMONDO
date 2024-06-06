import React, { useState } from 'react';
import Image from 'next/image';
import down from '../../assets/selectDown.png';
import filter from '../../assets/filter.png';
import {
  StyleSelectMenu,
  StyleSelectBTN,
  StyleSelectBTNTEXT,
  StyleUlOptions,
  StyledOptionSpan,
  StyledDiv,
} from './MainLayout';
import { optionArray } from '@/constants';
import styled from 'styled-components';

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
const MobileLayOut = () => {
  const [selectValue, setselectValue] = useState<string>('დალაგება');
  const [isFilterMenuHidden, setisFilterMenuHidden] = useState<boolean>(false);
  return (
    <>
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
        <StyleSelectBTNTEXT>ფილტრი</StyleSelectBTNTEXT>
      </StyleFilter>
      <StyledDiv />
    </>
  );
};

export default MobileLayOut;
