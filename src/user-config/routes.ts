import { AppRouteInterface } from 'app/components/routes/interfaces';
import UserConfigEdit from './pages/edit';

import UserConfigHome from './pages/home';

const UserConfigRoutes: AppRouteInterface[] = [
  {
    path: '/user-config',
    Component: UserConfigHome,
  },
  {
    path: '/user-config/edit',
    Component: UserConfigEdit,
  },
];

export default UserConfigRoutes;
