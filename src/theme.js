import { createTheme } from "@mui/material/styles";
import { useState, useMemo, createContext } from "react";

//color
export const theme = (mode) => ({
  ...(mode === "dark"
    ? {
        green: {
          100: "#d9f4df",
          200: "#b3e9bf",
          300: "#8ddf9e",
          400: "#67d47e",
          500: "#41c95e",
          600: "#34a14b",
          700: "#277938",
          800: "#1a5026",
          900: "#0d2813",
        },

        blue: {
          100: "#cedbfa",
          200: "#9db7f4",
          300: "#6d93ef",
          400: "#3c6fe9",
          500: "#0b4be4",
          600: "#093cb6",
          700: "#072d89",
          800: "#041e5b",
          900: "#020f2e",
        },

        red: {
          100: "#fee0e3",
          200: "#fec1c6",
          300: "#fda2aa",
          400: "#fd838d",
          500: "#fc6471",
          600: "#ca505a",
          700: "#973c44",
          800: "#65282d",
          900: "#321417",
        },

        black: {
          100: "#d7d8da",
          200: "#afb1b5",
          300: "#878b8f",
          400: "#5f646a",
          500: "#373d45",
          600: "#2c3137",
          700: "#212529",
          800: "#16181c",
          900: "#0b0c0e",
        },
      }
    : {
        greenReverse: {
          900: "#0d2813",
          800: "#1a5026",
          700: "#277938",
          600: "#34a14b",
          500: "#41c95e",
          400: "#67d47e",
          300: "#8ddf9e",
          200: "#b3e9bf",
          100: "#d9f4df",
        },

        blueReverse: {
          900: "#020f2e",
          800: "#041e5b",
          700: "#072d89",
          600: "#093cb6",
          500: "#0b4be4",
          400: "#3c6fe9",
          300: "#6d93ef",
          200: "#9db7f4",
          100: "#cedbfa",
        },

        redReverse: {
          900: "#321417",
          800: "#65282d",
          700: "#973c44",
          600: "#ca505a",
          500: "#fc6471",
          400: "#fd838d",
          300: "#fda2aa",
          200: "#fec1c6",
          100: "#fee0e3",
        },

        blackReverse: {
          900: "#0b0c0e",
          800: "#16181c",
          700: "#212529",
          600: "#2c3137",
          500: "#373d45",
          400: "#5f646a",
          300: "#878b8f",
          200: "#afb1b5",
          100: "#d7d8da",
        },
      }),
});

export const themeSetting = (mode) => {
  const colors = theme(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.blue[500],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              main: colors.black[500],
              dark: colors.black[700],
              light: colors.black[100],
            },
            background: {
              default: colors.blue[500],
            },
          }
        : {
            primary: {
              main: colors.blue[100],
            },
            secondary: {
              main: colors.greenReverse[500],
            },
            neutral: {
              main: colors.black[500],
              dark: colors.black[700],
              light: colors.black[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 36,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 30,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 26,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 22,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

//context to provide for entire app

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);
  return [theme, colorMode];
};
