'use client';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import phone from '../assets/phone.png';

const StyledHeader = styled.header`
  width: 100%;
  height: 110px;
  border-top: 1px solid rgba(236, 94, 42, 0.5);
`;

const StyledDiv = styled.div`
  height: 40px;
  background: #ec5e2a;
`;

const InnerDiv = styled.div`
  position: relative;
  width: 183px;
  height: 20px;
  top: 10px;
  left: 100px;
  border-radius: 3px;
`;

const PhoneStyle = styled.div`
  width: 10px;
  height: 20px;
  /* top: 10px;
  left: 100px; */
  border-radius: 3px;
  opacity: 0.8;
  background: #ffffff;
  /* align-items: center; */
  padding: 0 10px;
`;

const StyledImage = styled(Image)`
  width: 10px;
  height: 10px;
`;

const PhoneText = styled.span`
  height: 14px;
  margin-left: 10px;
  font-family: 'FiraGO', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  text-align: left;
  color: #ffffff;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <InnerDiv>
          <PhoneStyle>
            <StyledImage src={phone} alt="phone" />
          </PhoneStyle>
          <PhoneText>*7007 / +995 (32) 2 60 30 60</PhoneText>
        </InnerDiv>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
