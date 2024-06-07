'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

export const StyleMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleShowMore = styled.button`
  text-align: start;
  width: 100%;
  height: 20px;
  background: none;
  border: none;
  margin-left: -10px;
  font-family: FiraGO;
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  color: rgba(236, 94, 42, 1);
  cursor: pointer;
`;

interface ReleaseDataProps {
  year: string[];
  setYear: React.Dispatch<React.SetStateAction<string[]>>;
}

const ReleaseData: React.FC<ReleaseDataProps> = ({ year, setYear }) => {
  const [showMore, setShowMore] = useState(false);

  const yearsArray: Array<string> = [
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ];

  const onChange = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;
    if (checked) {
      setYear((prev) => [...prev, value]);
    } else {
      setYear((prev) => prev.filter((item) => item !== value));
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
        ? yearsArray.map((item) => (
            <Checkbox
              key={item}
              onChange={onChange}
              value={item}
              style={{ marginBottom: '15px' }}
              checked={year.includes(item)}
            >
              {item}
            </Checkbox>
          ))
        : yearsArray.slice(0, 3).map((item) => (
            <Checkbox
              key={item}
              onChange={onChange}
              value={item}
              style={{ marginBottom: '15px' }}
              checked={year.includes(item)}
            >
              {item}
            </Checkbox>
          ))}

      <StyleShowMore onClick={handleShowMoreClick}>
        {showMore ? 'აკეცვა' : 'მეტის ნახვა'}
      </StyleShowMore>
    </StyleMainContainer>
  );
};

export default ReleaseData;
