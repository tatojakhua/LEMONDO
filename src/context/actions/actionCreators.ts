import { FILTER, PRICERANGE } from './actions';

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

export { setFilter, setPriceRange };
