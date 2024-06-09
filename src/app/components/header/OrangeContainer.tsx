import React from 'react';
import {
  ContactSection,
  ContactText,
  NavItem,
  NavItems,
  OrangeBox,
  OrangeWrapper,
  PhoneIcon,
  StyledImageWrapper,
} from './styled-components';

const OrangeContainer: React.FC = () => {
  return (
    <OrangeBox>
      <OrangeWrapper>
        <ContactSection>
          <StyledImageWrapper>
            <PhoneIcon />
          </StyledImageWrapper>
          <ContactText>*7007 / +995 (32) 2 60 30 60</ContactText>
        </ContactSection>
        <NavItems>
          <NavItem>ონლაინ განვადება</NavItem>
          <NavItem>ფილიალები</NavItem>
          <NavItem>ყველა აქცია</NavItem>
        </NavItems>
      </OrangeWrapper>
    </OrangeBox>
  );
};

export default OrangeContainer;
