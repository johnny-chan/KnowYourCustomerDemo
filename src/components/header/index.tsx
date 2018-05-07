import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Typography } from 'material-ui';

interface Props {}

export default (props: Props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Welcome to Companies House
      </Typography>
    </Toolbar>
  </AppBar>
);
