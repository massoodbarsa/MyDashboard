import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./sections/global/Topbar";
import Dashboard from "./sections/dashboard/index";
import { ThemeProviderComponent } from "../src/sections/context/theme/ThemeContext";

function App() {
  return (
    <ThemeProviderComponent>
      <div className="app">
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </ThemeProviderComponent>
  );
}

export default App;
