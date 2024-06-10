'use client';
import React, { useState } from 'react';
import { optionArray } from '@/constants';
import MainLayout from './MainLayout';

import {
  DownButton,
  FilterIcon,
  MobileOnlySection,
  StyleFilter,
  StyleSection,
  StyleSelectBTN,
  StyleSelectBTNTEXT,
  StyleSelectMenu,
  StyleUlOptions,
  StyledDiv,
  StyledOptionSpan,
} from './styled-components';

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
      <StyleSection top="true">
        <MainLayout />
      </StyleSection>
      <MobileOnlySection>
        <StyleSelectMenu
          $showitem="true"
          onClick={() => setisFilterMenuHidden((prev: boolean) => !prev)}
        >
          <StyleSelectBTN>
            <StyleSelectBTNTEXT $sortButton="10px">
              {selectValue}
            </StyleSelectBTNTEXT>
            <DownButton isHidden={isFilterMenuHidden} />
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
        <StyleFilter onClick={handleFilterCLick}>
          <FilterIcon />
          <StyleSelectBTNTEXT>ფილტრი</StyleSelectBTNTEXT>
        </StyleFilter>
        <StyledDiv />
      </MobileOnlySection>
    </>
  );
};

export default Sort;
