import { Grid } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Technical from "./Technical";
import Psychology from "./Phychology";
import WorldSituation from "./WorldSituation";
import Microeconomy from "./Microeconomy";
import { AppContext } from "../context/app/AppContext";
import React, { useContext, FC } from "react";

const Dashboard: FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  const { selectedComponent } = context;

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Technical":
        return <Technical />;
      case "Psychology":
        return <Psychology />;
      case "WorldSituation":
        return <WorldSituation />;
      case "Microeconomy":
        return <Microeconomy />;
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
