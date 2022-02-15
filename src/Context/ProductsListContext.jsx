import React, { createContext, useState } from 'react';

const ProductsListContext = createContext({});

export default ProductsListContext;

export const ProductsListContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  return <ProductsListContext.Provider value={{ productsList, setProductsList }}>{children}</ProductsListContext.Provider>;
};
