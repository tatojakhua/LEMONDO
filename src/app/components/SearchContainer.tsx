import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import dots from '../assets/buttonDots.png';
import search from '../assets/search.png';
import cart from '../assets/cart.png';
import profile from '../assets/profile.png';
import menu from '../assets/hamburger-menu.png';
import searchMobile from '../assets/search-mobile.png';
import './header.css';

const SearchContainer = () => {
  return (
    <div
      className="gray-box"
      style={{
        background: 'rgba(242, 242, 242, 1)',
        width: '100%',
        height: '70px',
      }}
    >
      <div
        className="search-content"
        style={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'space-between',
          flexDirection: 'row',
          // width: '100%',
          maxWidth: '1200px',
          margin: '0px auto',
          padding: '0px 15px',
          height: '55px',
        }}
      >
        <Image
          className="hamburger-menu"
          src={menu}
          alt="hamburger-menu"
          style={{ display: 'none', width: '24px', height: '24px' }}
        />
        <Image
          className="logo"
          src={logo}
          alt="lemondo-logo"
          style={{ width: '151.88px', height: '40px', cursor: 'pointer' }}
        />
        <div
          className="navigation-search"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '620px',
          }}
        >
          <div
            className="nav-button"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '130px',
              height: '40px',
              background: 'rgba(236, 94, 42, 1)',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          >
            <Image
              src={dots}
              alt="button-dots"
              style={{ width: '20px', height: '20px' }}
            />

            <h4
              style={{
                width: '71px',
                height: '17px',
                fontFamily: 'FiraGO',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '16.8px',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              ნავიგაცია
            </h4>
          </div>
          <div
            className="input-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '460px',
              height: '40px',
              borderRadius: '12px',
              border: '1px solid rgba(236, 94, 42, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              cursor: 'pointer',
            }}
          >
            <Image
              src={search}
              alt="search"
              style={{ width: '20px', height: '20px', marginLeft: '20px' }}
            />
            <input
              className="input"
              placeholder="ძიება"
              style={{ border: 'none', width: '390px' }}
            />
          </div>
        </div>
        <div
          className="cart-profile"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '285px',
          }}
        >
          <div
            className="cart-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '130px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <Image
              src={cart}
              alt="cart"
              style={{ width: '24px', height: '24px' }}
            />
            <h4
              style={{
                fontFamily: 'FiraGo',
                fontWeight: '600',
                opacity: '0.7',
                fontSize: '14px',
                lineHeight: '16.8px',
              }}
            >
              კალათა
            </h4>
          </div>
          <div
            className="profile-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '130px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <Image
              src={profile}
              alt="profile"
              style={{ width: '24px', height: '24px' }}
            />
            <h4
              style={{
                fontFamily: 'FiraGo',
                fontWeight: '600',
                opacity: '0.7',
                fontSize: '14px',
                lineHeight: '16.8px',
              }}
            >
              პროფილი
            </h4>
          </div>
          <Image
            className="search-mobile"
            src={searchMobile}
            alt="search"
            style={{ display: 'none' }}
          />
          <Image
            className="cart-mobile"
            src={cart}
            alt="cart"
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
