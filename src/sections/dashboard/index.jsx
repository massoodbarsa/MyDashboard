import { Grid } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Technical from "./Technical";
import FearAndGreed from "./FearAndGreed";
import WorldSituation from "./WorldSituation";
import Microeconomy from "./Microeconomy";
import { AppContext } from "../context/AppContext";
import React, { useContext } from "react";

const Dashboard = () => {
  const { selectedComponent } = useContext(AppContext);

  console.log(selectedComponent);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Technical":
        return <Technical />;
      case "FearAndGreed":
        return <FearAndGreed />;
      case "WorldSituation":
        return <WorldSituation />;
      case "Microeconomy":
        return <Microeconomy />;
      default:
        return <Technical />;
    }
  };

  return (
    <Grid Grid container spacing={2} sx={{ height: "100%", p: 2 }}>
      <Grid item xs={12} sm={2}>
        <Sidebar />
      </Grid>

      <Grid
        item
        xs={12}
        sm={10}
        sx={{ backgroundColor: "red", height: "100%" }}
      >
        {renderComponent()}
        {/* <Grid container spacing={3} p={1}>
          <Grid item xs={12} sm={3}>
            <Technical />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FearAndGrid />
          </Grid>
          <Grid item xs={12} sm={3}>
            <WorldSituation />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Microeconomy />
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
};
export default Dashboard;
