import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";

// type Props = { name: string };

const Technical: FC = () => {
  return (
    <Card>
      <CardContent>
        <ShowChartIcon style={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          Technical Analysis
        </Typography>
        <Typography variant="body2">
          Display technical analysis information here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Technical;
