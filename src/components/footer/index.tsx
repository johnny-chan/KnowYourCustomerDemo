import * as React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

interface Props {}

export default (props: Props) => (
  <Paper>
    <Typography variant="caption" gutterBottom={true} align="center">
      Built by JC
    </Typography>
  </Paper>
);
