import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import styled from 'styled-components';

const StyleMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface WeightProps {
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const Weight: React.FC<WeightProps> = ({ checkedItems, setCheckedItems }) => {
  const weightArray: Array<string> = ['135', '164', '228'];

  const onChange = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedItems((prev) => [...prev, value]);
    } else {
      setCheckedItems((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <StyleMainContainer>
      {weightArray.map((item) => (
        <Checkbox
          key={item}
          onChange={onChange}
          value={item}
          style={{ marginBottom: '15px' }}
          checked={checkedItems.includes(item)}
        >
          {item} g
        </Checkbox>
      ))}
    </StyleMainContainer>
  );
};

export default Weight;
