import { Grid } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Technical from "./technical/Technical";
import Psychology from "./psychology/Phychology";
import WorldSituation from "./world-situation/WorldSituation";
import Microeconomy from "./microeconomy/Microeconomy";
import Macroeconomy from "./macroeconomy/Macroeconomy";

import { AppContext } from "../context/app/AppContext";
import React, { useContext, FC } from "react";
import { FinancialTypes } from "../enums/Enums";

const Dashboard: FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  const { selectedComponent } = context;

  const renderComponent = () => {
    switch (selectedComponent) {
      case FinancialTypes.MICROECONOMY:
        return <Microeconomy />;
      case FinancialTypes.TECHNICAL:
        return <Technical />;
      case FinancialTypes.PSYCHOLOGY:
        return <Psychology />;
      case FinancialTypes.WORLDSITUATION:
        return <WorldSituation />;
      case FinancialTypes.MACROECONOMY:
        return <Macroeconomy />;
      default:
        return <Technical />;
    }
  };

  return (
    <Grid container spacing={2} sx={{ height: "100%", p: 2 }}>
      <Grid item xs={12} sm={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} sm={10} sx={{ height: "100%" }}>
        {renderComponent()}
      </Grid>
    </Grid>
  );
};
export default Dashboard;
