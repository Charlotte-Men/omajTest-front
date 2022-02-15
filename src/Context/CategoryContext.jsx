import React, { createContext, useState } from 'react';

const CategoryContext = createContext({});

export default CategoryContext;

export const CategoryContextProvider = ({ children }) => {
  const [Category, setCategory] = useState();
  return <CategoryContext.Provider value={{ Category, setCategory }}>{children}</CategoryContext.Provider>;
};
