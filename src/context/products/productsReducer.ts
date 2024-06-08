import { FILTER, PRICERANGE } from '../actions/actions';

export interface State {
  priceRange: number[];
  filterData: string[];
}

export interface Action {
  type: string;
  payload: any;
}

export const initialState: State = {
  priceRange: [],
  filterData: [],
};

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case PRICERANGE: {
      return { ...state, priceRange: payload };
    }
    case FILTER: {
      return { ...state, filterData: payload };
    }
    default:
      return state;
  }
};
