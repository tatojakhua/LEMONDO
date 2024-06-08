'use client';
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer, State, Action } from './productsReducer';

interface ProductsContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const productsContext = createContext<ProductsContextType | undefined>(
  undefined
);

interface ProductsContextProviderProps {
  children: ReactNode;
}

const ProductsContextProvider: React.FC<ProductsContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <productsContext.Provider value={{ state, dispatch }}>
      {children}
    </productsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useProductsContext = () => {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error('Products context is not working');
  }
  return context;
};

export { ProductsContextProvider, useProductsContext };
