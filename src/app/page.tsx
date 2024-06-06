'use client';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Sort from './components/sort/Sort';
import NavBar from './components/navigationBar/NavBar';
import Filter from './components/filter/Filter';
import styled from 'styled-components';
import Products from './components/products/Products';

const StyleMainLayOut = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0px auto;
  height: 70vh;
`;
export default function Home() {
  const [isFilterHidden, setIsFilterHidden] = useState<boolean>(false);

  return (
    <main className="app">
      <Header />
      <Sort setIsFilterHidden={setIsFilterHidden} />
      <StyleMainLayOut>
        <Filter
          isFilterHidden={isFilterHidden}
          setIsFilterHidden={setIsFilterHidden}
        />
        <Products />
      </StyleMainLayOut>
      <NavBar />
    </main>
  );
}
