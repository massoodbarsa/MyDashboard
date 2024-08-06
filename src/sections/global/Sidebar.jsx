import React from "react";
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
  return (
    <div>
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <ListItem button>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Technical Analysis" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SentimentVeryDissatisfiedIcon />
          </ListItemIcon>
          <ListItemText primary="Fear & Greed Index" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="World Situation" />
        </ListItem>
        <Divider />
        <ListItem button>
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
