import React, { useState } from 'react';

import { optionArray } from '@/constants';
import {
  AppleIcon,
  BackButtonIcon,
  DownButtonIcon,
  Grid1Icon,
  Grid2Icon,
  StyleH2Text,
  StyleInnerContainer,
  StyleSelectBTN,
  StyleSelectBTNTEXT,
  StyleSelectMenu,
  StyleUlOptions,
  StyledButton,
  StyledDiv,
  StyledOptionSpan,
} from './styled-components';

const MainLayout = () => {
  const [selectValue, setselectValue] = useState<string>('დალაგება');
  const [isFilterMenuHidden, setisFilterMenuHidden] = useState<boolean>(false);

  return (
    <>
      <StyleInnerContainer width="100px">
        <StyledButton>
          <BackButtonIcon />
        </StyledButton>
        <AppleIcon />
        <StyleH2Text>Apple</StyleH2Text>
      </StyleInnerContainer>
      <StyleInnerContainer width="250px" end="true">
        <StyleSelectMenu
          onClick={() => setisFilterMenuHidden((prev: boolean) => !prev)}
        >
          <StyleSelectBTN>
            <StyleSelectBTNTEXT>{selectValue}</StyleSelectBTNTEXT>
            <DownButtonIcon isHidden={isFilterMenuHidden} />
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
        <StyledButton>
          <Grid1Icon />
        </StyledButton>
        <StyledButton>
          <Grid2Icon />
        </StyledButton>
      </StyleInnerContainer>
      <StyledDiv />
    </>
  );
};

export default MainLayout;
