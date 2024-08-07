import React, { createContext, useState, ReactNode, FC } from "react";
import { FinancialTypes } from "../../enums/Enums";
import { AppContextState } from "./AppCotextType";

// Create the context with a default value of undefined
export const AppContext = createContext<AppContextState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>(
    FinancialTypes.TECHNICAL
  );

  return (
    <AppContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </AppContext.Provider>
  );
};
