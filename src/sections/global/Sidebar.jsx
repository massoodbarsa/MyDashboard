import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Sidebar() {
  const { setSelectedComponent } = useContext(AppContext);

  console.log(setSelectedComponent);
  return (
    <div>
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <ListItem button onClick={() => setSelectedComponent("Technical")}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Technical Analysis" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setSelectedComponent("FearAndGreed")}>
          <ListItemIcon>
            <SentimentVeryDissatisfiedIcon />
          </ListItemIcon>
          <ListItemText primary="Fear & Greed Index" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setSelectedComponent("WorldSituation")}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="World Situation" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => setSelectedComponent("Microeconomy")}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Microeconomic Factors" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
