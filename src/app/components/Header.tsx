'use client';
import React from 'react';
import OrangeContainer from './OrangeContainer';
import SearchContainer from './SearchContainer';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <OrangeContainer />
      <SearchContainer />
    </header>
  );
};

export default Header;
