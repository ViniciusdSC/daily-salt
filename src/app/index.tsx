import React from 'react';
import Container from '@material-ui/core/Container';
import AppHeader from './components/header';
import AppDrawer from './components/drawer';
import AppRoutes from './components/routes';

import useStyles from './styles';

const App: React.FC = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);

  return (
    <div className={classes.root}>
      <AppHeader drawerState={openDrawer} setDrawerState={setOpenDrawer} />
      <AppDrawer drawerState={openDrawer} setDrawerState={setOpenDrawer} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <AppRoutes />
        </Container>
      </main>
    </div>
  );
}

export default App;