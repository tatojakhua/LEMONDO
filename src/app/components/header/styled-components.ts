import styled from 'styled-components';
import menu from '../../assets/hamburger-menu.png';
import logo from '../../assets/logo.png';
import dots from '../../assets/buttonDots.png';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import profile from '../../assets/profile.png';
import searchMobile from '../../assets/search-mobile.png';
import phone from '../../assets/phone.png';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

//-- Orange Container --//

export const OrangeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(236, 94, 42, 1);
  height: 40px;
  padding-bottom: 0;

  @media screen and (max-width: 1020px) {
    display: none !important;
  }
`;

export const OrangeWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const PhoneIcon = styled.img.attrs({
  src: phone.src,
  alt: 'phone',
})`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  opacity: 0.8;
`;

export const ContactText = styled.h4`
  width: 200px;
  height: 14px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.4px;
  color: rgba(255, 255, 255, 1);
  font-family: 'FiraGO';
  margin-top: 3px;
  margin-left: 10px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 307px;
  height: 20px;
  opacity: 0.7;
`;

export const NavItem = styled.h4`
  font-family: 'FiraGo';
  font-weight: 600;
  font-size: 12px;
  line-height: 14.4px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

export const StyledImageWrapper = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  opacity: 0.8;
  overflow: hidden;
`;

//--Search Container --//

export const GrayBox = styled.div`
  background: rgba(242, 242, 242, 1);
  width: 100%;
  height: 70px;
  @media screen and (max-width: 1020px) {
    position: fixed;
    z-index: 10;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  height: 55px;
`;

export const NavigationTitle = styled.h4`
  width: 71px;
  height: 17px;
  font-family: 'FiraGO';
  font-weight: 500;
  font-size: 14px;
  line-height: 16.8px;
  color: rgba(255, 255, 255, 1);
`;

export const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 130px;
  height: 40px;
  background: rgba(236, 94, 42, 1);
  border-radius: 12px;
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: none !important;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 460px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(236, 94, 42, 0.5);
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: none !important;
  }
`;

export const CustomInput = styled.input`
  border: none;
  width: 390px;
  outline: none;

  &::placeholder {
    width: 40px;
    height: 17px;
    top: 67px;
    left: 566px;
    gap: 0px;
    opacity: 0.8px;
    font-family: FiraGO;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.8px;
    text-align: left;
  }
`;

export const CartProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 285px;
  @media screen and (max-width: 1020px) {
    width: 60px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 130px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: none !important;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 130px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media screen and (max-width: 1020px) {
    display: none !important;
  }
`;

export const HamburgerMenu = styled.img.attrs({
  src: menu.src,
  alt: 'hamburger-menu',
})`
  display: none;
  width: 24px;
  height: 24px;

  @media screen and (max-width: 1020px) {
    display: block !important;
    cursor: pointer;
  }
`;

export const Logo = styled.img.attrs({
  src: logo.src,
  alt: 'lemondo-logo',
})`
  width: 151.88px;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 1020px) {
    width: 107px !important;
    height: 28px !important;
    position: absolute;
    left: 56px;
  }
`;

export const DotsButton = styled.img.attrs({
  src: dots.src,
  alt: 'button-dots',
})`
  width: 20px;
  height: 20px;
`;
export const SearchIcon = styled.img.attrs({
  src: search.src,
  alt: 'search',
})`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

export const CartIcon = styled.img.attrs({
  src: cart.src,
  alt: 'cart',
})`
  width: 24px;
  height: 24px;
`;

export const ProfileIcon = styled.img.attrs({
  src: profile.src,
  alt: 'profile',
})`
  width: 24px;
  height: 24px;
`;

export const SearchMobileIcon = styled.img.attrs({
  src: searchMobile.src,
  alt: 'search',
})`
  display: none;

  @media screen and (max-width: 1020px) {
    display: block !important;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const CartMobileIcon = styled.img.attrs({
  src: cart.src,
  alt: 'cart',
})`
  display: none;

  @media screen and (max-width: 1020px) {
    display: block !important;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
