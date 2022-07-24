import AppDashboard from 'app/pages/dashboard';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RecipeTypeRoutes from 'recipe-type/routes';
import RecipeRoutes from 'recipe/routes';
import SpentTypeRoutes from 'spent-type/routes';
import SpentRoutes from 'spent/routes';
import UserConfigRoutes from 'user-config/routes';

const AppRoutes: React.FC = () => (
  <Switch>
    {RecipeTypeRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    ))}

    {RecipeRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    ))}

    {SpentRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    ))}

    {SpentTypeRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    ))}

    {UserConfigRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    ))}

    {/* fallback */}
    <Route exact path="/">
      <AppDashboard />
    </Route>
  </Switch>
);

export default AppRoutes;
