import React, { createContext, useState, FC } from "react";

import { AppContextState } from "./AppCotextType";

export const AppContext =
  (createContext < AppContextState) | (undefined > undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] =
    useState < string > "Technical";

  return (
    <AppContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </AppContext.Provider>
  );
};
