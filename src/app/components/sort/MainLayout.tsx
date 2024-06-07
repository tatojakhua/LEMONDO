import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import back from '../../assets/backButton.png';
import apple from '../../assets/apple.png';
import grid1 from '../../assets/grid1.png';
import grid2 from '../../assets/grid2.png';
import down from '../../assets/selectDown.png';
import { optionArray } from '@/constants';

const StyleInnerContainer = styled.div<{ width: string; end?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${(props) => props.width};
  @media screen and (max-width: 1020px) {
    justify-content: ${(props) => (props.end ? 'end' : 'start')};
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyleH2Text = styled.h2`
  width: 42px;
  height: 19px;
  font-family: FiraGo;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  color: rgba(0, 0, 0, 1);
`;

export const StyleSelectMenu = styled.div<{ $showitem?: string }>`
  width: 170px;
  height: 32px;
  border-radius: 30px;
  background-color: rgba(242, 242, 242, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: ${(props) => (props.$showitem ? 'block' : 'none')};
  }
`;

export const StyleSelectBTN = styled.div`
  display: flex;
  text-align: center;
  align-items: end;
  justify-content: space-around;
  margin-top: 7px;
`;

export const StyleSelectBTNTEXT = styled.span`
  width: 62px;
  height: 14px;
  font-family: FiraGo;
  font-weight: 500;
  line-height: 14.4px;
`;

export const StyleUlOptions = styled.ul<{ $showdisplay: string }>`
  display: ${(props) => (props.$showdisplay == 'true' ? 'block' : 'none')};
  position: relative;
  width: 200px;
  height: 222px;
  border-radius: 12px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const StyledOptionSpan = styled.li`
  display: flex;
  width: 160px;
  height: 22px;
  font-family: FiraGo;
  font-weight: 500;
  line-height: 12px;
  padding-top: 9px;
  margin-left: -10px;
  border-radius: 8px;
  &:hover {
    background-color: rgba(242, 242, 242, 1);
  }
`;

export const StyledDiv = styled.div<{ $full?: string }>`
  position: absolute;
  width: ${(props) => (props.$full ? '100%' : 'calc(100% - 30px)')};
  height: 2px;
  background: rgba(242, 242, 242, 1);
  bottom: 0;
`;

const MainLayout = () => {
  const [selectValue, setselectValue] = useState<string>('დალაგება');
  const [isFilterMenuHidden, setisFilterMenuHidden] = useState<boolean>(false);
  return (
    <>
      <StyleInnerContainer width="100px">
        <StyledButton>
          <Image
            src={back}
            alt="back-button"
            style={{
              width: '11.04px',
              height: '12px',
              marginTop: '4px',
            }}
          />
        </StyledButton>
        <Image
          className="apple-img"
          src={apple}
          alt="apple"
          style={{ width: '24px', height: '24px' }}
        />
        <StyleH2Text>Apple</StyleH2Text>
      </StyleInnerContainer>
      <StyleInnerContainer width="250px" end="true">
        <StyleSelectMenu
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
                marginLeft: '15px',
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
        <StyledButton>
          <Image
            src={grid1}
            alt="grid-1"
            style={{ width: '24px', height: '24px', marginLeft: '15px' }}
          />
        </StyledButton>
        <StyledButton>
          <Image
            src={grid2}
            alt="grid-2"
            style={{ width: '24px', height: '24px' }}
          />
        </StyledButton>
      </StyleInnerContainer>
      <StyledDiv />
    </>
  );
};

export default MainLayout;
