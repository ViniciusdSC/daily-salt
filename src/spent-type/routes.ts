import { AppRouteInterface } from 'app/components/routes/interfaces';

import SpentTypeCreate from './pages/create';
import SpentTypeEdit from './pages/edit';
import SpentTypeHome from './pages/home';
import SpentTypeView from './pages/view';

const SpentTypeRoutes: AppRouteInterface[] = [
  {
    path: '/spent-type',
    Component: SpentTypeHome,
  },
  {
    path: '/spent-type/create',
    Component: SpentTypeCreate,
  },
  {
    path: '/spent-type/edit/:id',
    Component: SpentTypeEdit,
  },
  {
    path: '/spent-type/view/:id',
    Component: SpentTypeView,
  },
];

export default SpentTypeRoutes;
