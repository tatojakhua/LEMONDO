'use client';
import React from 'react';
import OrangeContainer from './OrangeContainer';
import SearchContainer from './SearchContainer';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', flexDirection: 'column' }}>
      <OrangeContainer />
      <SearchContainer />
    </header>
  );
};

export default Header;
