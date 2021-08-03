import { AppRouteInterface } from 'app/components/routes/interfaces';

import UserConfigHome from './pages/home';

const UserConfigRoutes: AppRouteInterface[] = [
  {
    path: '/user-config',
    component: UserConfigHome,
  },
];

export default UserConfigRoutes;
