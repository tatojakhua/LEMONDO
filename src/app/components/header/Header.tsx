'use client';
import React from 'react';
import OrangeContainer from './OrangeContainer';
import SearchContainer from './SearchContainer';
import { StyledHeader } from './styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <OrangeContainer />
      <SearchContainer />
    </StyledHeader>
  );
};

export default Header;
