import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function Microeconomy() {
  return (
    <Card>
      <CardContent>
        <AttachMoneyIcon style={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          Microeconomic Factors
        </Typography>
        <Typography variant="body2">
          Display information about microeconomic factors here.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Microeconomy;
