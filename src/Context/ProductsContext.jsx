import React, { createContext, useState } from 'react';

const ProductsContext = createContext({});

export default ProductsContext;

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  return <ProductsContext.Provider value={{ products, setProducts }}>{children}</ProductsContext.Provider>;
};
