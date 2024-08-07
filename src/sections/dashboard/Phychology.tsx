import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const Psychology: FC = () => {
  return (
    <Card>
      <CardContent>
        <SentimentVeryDissatisfiedIcon style={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          Market Psychology
        </Typography>
        <Typography variant="body2">
          Display Fear & Greed index information here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Psychology;
