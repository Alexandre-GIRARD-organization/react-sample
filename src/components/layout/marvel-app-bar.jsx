import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function MarvelAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">MARVEL</Typography>
      </Toolbar>
    </AppBar>
  );
}
