'use client';
import React, { useState } from 'react';
import { StyleMainContainer, StyleShowMore } from './ReleaseData';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

interface ReleaseDataProps {
  screenSize: string[];
  setScreenSize: React.Dispatch<React.SetStateAction<string[]>>;
}

const ScreenSize: React.FC<ReleaseDataProps> = ({
  screenSize,
  setScreenSize,
}) => {
  const [showMore, setShowMore] = useState(false);

  const inchesArray: Array<string> = ['4.5', '5.4', '5.8', '6.5', '1.8'];

  const onChange = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;
    if (checked) {
      setScreenSize((prev) => [...prev, value]);
    } else {
      setScreenSize((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleShowMoreClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <StyleMainContainer>
      {showMore
        ? inchesArray.map((item) => (
            <Checkbox
              key={item}
              onChange={onChange}
              value={item}
              style={{ marginBottom: '15px' }}
              checked={screenSize.includes(item)}
            >
              {item} inches
            </Checkbox>
          ))
        : inchesArray.slice(0, 3).map((item) => (
            <Checkbox
              key={item}
              onChange={onChange}
              value={item}
              style={{ marginBottom: '15px' }}
              checked={screenSize.includes(item)}
            >
              {item} inches
            </Checkbox>
          ))}
      <StyleShowMore onClick={handleShowMoreClick}>
        {showMore ? 'აკეცვა' : 'მეტის ნახვა'}
      </StyleShowMore>
    </StyleMainContainer>
  );
};

export default ScreenSize;
