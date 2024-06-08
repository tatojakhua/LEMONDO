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
  width: 150%;
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

interface CheckBoxProps {
  values: { id: number; value: string }[];
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  values,
  checkedValues,
  setCheckedValues,
}) => {
  const [showMore, setShowMore] = useState(false);

  const onChange = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValues((prev) => [...prev, value]);
    } else {
      setCheckedValues((prev) => prev.filter((item) => item !== value));
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
        ? values.map((item) => (
            <Checkbox
              key={item.id}
              onChange={onChange}
              value={item.id.toString()}
              style={{ marginBottom: '15px' }}
              checked={checkedValues.includes(item.id.toString())}
            >
              {item.value}
            </Checkbox>
          ))
        : values.slice(0, 3).map((item) => (
            <Checkbox
              key={item.id}
              onChange={onChange}
              value={item.id.toString()}
              style={{ marginBottom: '15px' }}
              checked={checkedValues.includes(item.id.toString())}
            >
              {item.value}
            </Checkbox>
          ))}
      {values.length > 3 && (
        <StyleShowMore onClick={handleShowMoreClick}>
          {showMore ? 'აკეცვა' : 'მეტის ნახვა'}
        </StyleShowMore>
      )}
    </StyleMainContainer>
  );
};

export default CheckBox;
