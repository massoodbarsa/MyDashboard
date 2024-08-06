import { Box, Container, Grid } from "@mui/material";
import Sidebar from "../global/Sidebar";
import Technical from "./Technical";
import FearAndGrid from "./FearAndGreed";
import WorldSituation from "./WorldSituation";
import Microeconomy from "./Microeconomy";

const Dashboard = () => {
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
        <Grid container spacing={3} p={1}>
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
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
