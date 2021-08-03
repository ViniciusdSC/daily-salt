import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MoneyIcon from '@material-ui/icons/Money';

import { useHistory } from 'react-router-dom';
import useStyles from './styles';

interface Props {
  drawerState: boolean;
  setDrawerState(state: boolean): void;
}

const AppDrawer: React.FC<Props> = ({ setDrawerState, drawerState }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, !drawerState && classes.closedDrawer),
      }}
      open={drawerState}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setDrawerState(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => history.push('/spent-type')}>
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>
          <ListItemText primary="Spent Type" />
        </ListItem>
        <ListItem button onClick={() => history.push('/recipe-type')}>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="Recipe Type" />
        </ListItem>
        <ListItem button onClick={() => history.push('/spent')}>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Spent" />
        </ListItem>
        <ListItem button onClick={() => history.push('/recipe')}>
          <ListItemIcon>
            <MoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Recipe" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
