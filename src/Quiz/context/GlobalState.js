import React, { createContext } from "react";

const globalState = {
  index: 0,
};

export const GlobalContext = createContext(globalState);

export const GlobalProvider = ({ children }) => {
  const value = {};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
