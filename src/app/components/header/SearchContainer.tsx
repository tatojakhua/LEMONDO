import React from 'react';
import {
  CartContainer,
  CartIcon,
  CartMobileIcon,
  CartProfile,
  CustomInput,
  DotsButton,
  GrayBox,
  HamburgerMenu,
  InputContainer,
  Logo,
  NavButton,
  NavigationTitle,
  ProfileContainer,
  ProfileIcon,
  SearchContent,
  SearchIcon,
  SearchMobileIcon,
} from './styled-components';

const SearchContainer = () => {
  return (
    <GrayBox>
      <SearchContent>
        <HamburgerMenu />
        <Logo />
        <NavButton>
          <DotsButton />
          <NavigationTitle>ნავიგაცია</NavigationTitle>
        </NavButton>
        <InputContainer>
          <SearchIcon />
          <CustomInput className="input" placeholder="ძიება" />
        </InputContainer>
        <CartProfile>
          <CartContainer>
            <CartIcon />
            <h5>კალათა</h5>
          </CartContainer>
          <ProfileContainer>
            <ProfileIcon />
            <h5>პროფილი</h5>
          </ProfileContainer>
          <SearchMobileIcon />
          <CartMobileIcon />
        </CartProfile>
      </SearchContent>
    </GrayBox>
  );
};

export default SearchContainer;
