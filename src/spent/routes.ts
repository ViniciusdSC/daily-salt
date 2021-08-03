import { AppRouteInterface } from 'app/components/routes/interfaces';

import SpentCreate from './pages/create';
import SpentEdit from './pages/edit';
import SpentHome from './pages/home';
import SpentView from './pages/view';

const SpentRoutes: AppRouteInterface[] = [
  {
    path: '/spent',
    Component: SpentHome,
  },
  {
    path: '/spent/create',
    Component: SpentCreate,
  },
  {
    path: '/spent/edit/:id',
    Component: SpentEdit,
  },
  {
    path: '/spent/view/:id',
    Component: SpentView,
  },
];

export default SpentRoutes;
