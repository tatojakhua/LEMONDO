import { FILTER, PRICERANGE, SORT } from './actions';

const setPriceRange = (payload: Array<number>) => {
  return {
    type: PRICERANGE,
    payload,
  };
};

const setFilter = (payload: Array<string>) => {
  return {
    type: FILTER,
    payload,
  };
};

const sortAction = (payload: string) => {
  return {
    type: SORT,
    payload,
  };
};

export { setFilter, setPriceRange, sortAction };
