'use client';
import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { StyleMainContainer, StyleShowMore } from './styled-components';
import { CheckBoxProps } from './interface-type';

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
