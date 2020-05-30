import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navigation = (props) => (
  <React.Fragment>
    <AppBar position={"static"}>
      <Toolbar>
        <Typography variant='body1'>Covid19 Tracker</Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navigation;
