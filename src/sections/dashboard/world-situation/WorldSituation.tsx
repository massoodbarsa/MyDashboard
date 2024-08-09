import React, { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

interface TopbarProps {
  // title: string;
  // isLoggedIn: boolean;
}

const WorldSituation: FC = () => {
  return (
    <Card>
      <CardContent>
        <PublicIcon style={{ fontSize: 40 }} />
        <Typography variant="h5" component="div">
          World Situation
        </Typography>
        <Typography variant="body2">
          Display global news or situation reports here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorldSituation;
