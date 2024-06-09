'use client';
import React from 'react';
import Image from 'next/image';
import { menuArray } from '@/constants/mobileItems';
import {
  StyleContainerDiv,
  StyleMainDiv,
  StyleTextH4,
  StyledSection,
} from './styled.components';

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
