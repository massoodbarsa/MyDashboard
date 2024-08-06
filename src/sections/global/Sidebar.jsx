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

  return (
    <div>
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", p: 1 }}
      >
        <ListItem button onClick={() => setSelectedComponent("Technical")}>
          <ListItemIcon sx={{ py: 1 }}>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Technical Analysis" />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent("FearAndGreed")}
          sx={{ py: 1 }}
        >
          <ListItemIcon>
            <SentimentVeryDissatisfiedIcon />
          </ListItemIcon>
          <ListItemText primary="Fear & Greed Index" />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent("WorldSituation")}
          sx={{ py: 1 }}
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="World Situation" />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent("Microeconomy")}
          sx={{ py: 1 }}
        >
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
