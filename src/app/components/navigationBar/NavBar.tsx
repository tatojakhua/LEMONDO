'use client';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import home from '../../assets/menuHome.png';

const StyledSection = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

const StyleContainerDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: row;
`;

const StyleTextH4 = styled.h4`
  width: 53px;
  height: 14px;
  font-family: FiraGo;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.4px;
`;

const NavBar: React.FC = () => {
  return (
    <StyledSection>
      <StyleContainerDiv>
        <Image
          src={home}
          alt="home"
          style={{ width: '24px', height: '24px' }}
        />
        <StyleTextH4>მთავარი</StyleTextH4>
      </StyleContainerDiv>
    </StyledSection>
  );
};

export default NavBar;
