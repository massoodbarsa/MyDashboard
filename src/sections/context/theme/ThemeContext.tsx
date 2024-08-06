import { createContext, useState, useMemo, FC, ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { themeSettings } from "../../../theme"; // Adjust import paths
import React from "react";
import { UseModeReturnType } from "../../types/ThemeContextType";

interface ColorModeContextType {
  setMode: () => void;
  mode: "light" | "dark"; // Only light or dark modes
}

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export const ThemeProviderComponent: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      setMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );

  const theme = useMemo<Theme>(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useMode = (): UseModeReturnType => {
  const context = React.useContext(ColorModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ThemeProviderComponent");
  }
  const { mode, setMode } = context;
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, { setMode, mode }];
};
