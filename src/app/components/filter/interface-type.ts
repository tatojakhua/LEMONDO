import React from 'react';
//-- Filter --//
export interface FIlterProps {
  isFilterHidden: boolean;
  setIsFilterHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FilterValue = { id: number; value: string };

export interface FilterType {
  name: string;
  values: FilterValue[];
}

//-- Price Slider --//

export interface PriceSliderProps {
  sliderValue: [number, number];
  setSliderValue: React.Dispatch<React.SetStateAction<[number, number]>>;
}

//--CheckBox --//

export interface CheckBoxProps {
  values: { id: number; value: string }[];
  checkedValues: string[];
  setCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
}
