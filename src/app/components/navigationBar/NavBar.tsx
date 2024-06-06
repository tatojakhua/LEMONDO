'use client';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { menuArray } from '@/constants/mobileItems';

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

const StyleMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
  margin-top: 15px;
`;

const StyleContainerDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 130px;
  cursor: pointer;
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
      <StyleMainDiv>
        {menuArray.map((item) => (
          <StyleContainerDiv key={item.id}>
            <Image
              src={item.img}
              alt={item.text}
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
            />
            <StyleTextH4>{item.text}</StyleTextH4>
          </StyleContainerDiv>
        ))}
      </StyleMainDiv>
    </StyledSection>
  );
};

export default NavBar;
