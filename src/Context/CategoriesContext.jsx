import React, { createContext, useState } from 'react';

const CategoriesContext = createContext({});

export default CategoriesContext;

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  return <CategoriesContext.Provider value={{ categories, setCategories }}>{children}</CategoriesContext.Provider>;
};
