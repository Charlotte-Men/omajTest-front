import React, { createContext, useState } from 'react';

const AllProductsContext = createContext({});

export default AllProductsContext;

export const AllProductsContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  return <AllProductsContext.Provider value={{ allProducts, setAllProducts }}>{children}</AllProductsContext.Provider>;
};
