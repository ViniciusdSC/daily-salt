import AppDashboard from 'app/pages/dashboard';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SpentTypeRoutes from 'spent-type/routes';
import SpentRoutes from 'spent/routes';
import UserConfigRoutes from 'user-config/routes';

const AppRoutes: React.FC = () => (
  <Switch>
    {SpentRoutes.map(({ path, Component }) => (
      <Route key={path} path={path}>
        <Component />
      </Route>
    ))}

    {SpentTypeRoutes.map(({ path, Component }) => (
      <Route key={path} path={path}>
        <Component />
      </Route>
    ))}

    {UserConfigRoutes.map(({ path, Component }) => (
      <Route key={path} path={path}>
        <Component />
      </Route>
    ))}

    {/* fallback */}
    <Route path="/">
      <AppDashboard />
    </Route>
  </Switch>
);

export default AppRoutes;
