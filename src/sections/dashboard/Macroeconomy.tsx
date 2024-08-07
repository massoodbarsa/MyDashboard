import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Macroeconomy: FC = () => {
  return (
    <Card>
      <CardContent>
        <AccountBalanceIcon style={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          Macroeconomy Factors
        </Typography>
        <Typography variant="body2">
          Display information about microeconomic factors here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Macroeconomy;
