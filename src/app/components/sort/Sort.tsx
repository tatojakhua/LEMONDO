'use client';
import React from 'react';
import styled from 'styled-components';
import MainLayout from './MainLayout';
import MobileLayOut from './MobileLayOut';
import './sort.css';

const StyleSection = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
  height: 92px;
`;

const Sort: React.FC = () => {
  return (
    <StyleSection>
      <MainLayout />
      <MobileLayOut />
    </StyleSection>
  );
};

export default Sort;
