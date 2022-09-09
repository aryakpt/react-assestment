import React, { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderContextProvider = ({ children }) => {
  const [isHover, setIsHover] = useState(true);
  const value = { isHover, setIsHover };

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};
