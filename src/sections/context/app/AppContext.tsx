import React, { createContext, useState, ReactNode, FC } from "react";
import { AppContextState } from "./AppCotextType";

// Create the context with a default value of undefined
export const AppContext = createContext<AppContextState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("Technical");

  return (
    <AppContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </AppContext.Provider>
  );
};
