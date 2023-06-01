import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext value={colorMode}>
      <ThemeProvider>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext>
  );
}

export default App;
