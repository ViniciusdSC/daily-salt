import React from 'react';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

interface Props {
  title?: string;
  actions?: React.ReactNode;
}

const AppPaper: React.FC<Props> = ({ children, title, actions }) => {
  const classes = useStyles();

  return (
    <Paper variant="elevation" className={classes.paper} square>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.toolbarTitle}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
        {actions}
      </Toolbar>
      <div className={classes.content}>{children}</div>
    </Paper>
  );
};

export default AppPaper;
