import React, { FC, useContext } from "react";
import { AppContext } from "../context/app/AppContext";

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FinancialTypes } from "../enums/Enums";

const Sidebar: FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  const { setSelectedComponent } = context;

  return (
    <div>
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", p: 1 }}
      >
        <ListItem
          button
          onClick={() => setSelectedComponent(FinancialTypes.TECHNICAL)}
        >
          <ListItemIcon sx={{ py: 1 }}>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary={FinancialTypes.TECHNICAL} />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent(FinancialTypes.PSYCHOLOGY)}
          sx={{ py: 1 }}
        >
          <ListItemIcon>
            <SentimentVeryDissatisfiedIcon />
          </ListItemIcon>
          <ListItemText primary={FinancialTypes.PSYCHOLOGY} />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent(FinancialTypes.WORLDSITUATION)}
          sx={{ py: 1 }}
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary={FinancialTypes.WORLDSITUATION} />
        </ListItem>
        {/* <Divider /> */}
        <ListItem
          button
          onClick={() => setSelectedComponent(FinancialTypes.MICROECONOMY)}
          sx={{ py: 1 }}
        >
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={FinancialTypes.MICROECONOMY} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
