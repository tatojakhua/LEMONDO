import React from 'react';
import Image from 'next/image';
import phone from '../assets/image.png';

const OrangeContainer: React.FC = () => {
  return (
    <div
      className="orange-box"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(236, 94, 42, 1)',
        width: '100%',
        height: '40px',
        padding: '0 100px',
        paddingBottom: '0',
      }}
    >
      <div
        className="contact-section"
        style={{
          width: '200px',
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <Image
          src={phone}
          alt="phone"
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '3px',
            opacity: '0.8',
          }}
        />
        <h4
          style={{
            width: '200px',
            height: '14px',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '14.4px',
            color: 'rgba(255, 255, 255, 1)',
            fontFamily: 'FiraGO',
            marginTop: '3px',
            marginLeft: '10px',
          }}
        >
          *7007 / +995 (32) 2 60 30 60
        </h4>
      </div>
      <div
        className="nav-items"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '307px',
          height: '14px',
          marginRight: '200px', //** */
          opacity: '0.7',
        }}
      >
        <h4
          style={{
            fontFamily: 'FiraGo',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '14.4px',
            color: 'rgba(255, 255, 255, 1)',
            cursor: 'pointer',
          }}
        >
          ონლაინ განვადება
        </h4>
        <h4
          style={{
            fontFamily: 'FiraGo',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '14.4px',
            color: 'rgba(255, 255, 255, 1)',
            cursor: 'pointer',
          }}
        >
          ფილიალები
        </h4>
        <h4
          style={{
            fontFamily: 'FiraGo',
            fontWeight: '600',
            fontSize: '12px',
            lineHeight: '14.4px',
            color: 'rgba(255, 255, 255, 1)',
            cursor: 'pointer',
          }}
        >
          ყველა აქცია
        </h4>
      </div>
    </div>
  );
};

export default OrangeContainer;
