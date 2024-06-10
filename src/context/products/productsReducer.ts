import { FILTER, PRICERANGE, SORT } from '../actions/actions';

export interface State {
  priceRange: number[];
  filterData: any[];
  sort: string;
}

export interface Action {
  type: string;
  payload: any;
}

export const initialState: State = {
  priceRange: [],
  filterData: [],
  sort: '',
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

    case SORT: {
      return { ...state, sort: payload };
    }
    default:
      return state;
  }
};
