import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

// icons
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

interface Props {
  drawerState: boolean;
  setDrawerState(state: boolean): void;
}

const AppHeader: React.FC<Props> = ({ drawerState, setDrawerState }) => {
  const classes = useStyles();

  return (
    <AppBar
      color="inherit"
      elevation={0}
      position="absolute"
      className={clsx(classes.appBar, drawerState && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setDrawerState(true)}
          className={clsx(
            classes.menuButton,
            drawerState && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          My Wallet
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
