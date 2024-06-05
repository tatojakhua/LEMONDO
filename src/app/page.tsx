import React from 'react';
import Header from './components/header/Header';
import Sort from './components/sort/Sort';
// import NavBar from './components/navigationBar/NavBar';

export default function Home() {
  return (
    <main className="app">
      <Header />
      <Sort />
      {/* <NavBar /> */}
    </main>
  );
}
