import { AppRouteInterface } from 'app/components/routes/interfaces';

import RecipeTypeCreate from './pages/create';
import RecipeTypeEdit from './pages/edit';
import RecipeTypeHome from './pages/home';
import RecipeTypeView from './pages/view';

const RecipeTypeRoutes: AppRouteInterface[] = [
  {
    path: '/recipe-type',
    Component: RecipeTypeHome,
  },
  {
    path: '/recipe-type/create',
    Component: RecipeTypeCreate,
  },
  {
    path: '/recipe-type/edit/:id',
    Component: RecipeTypeEdit,
  },
  {
    path: '/recipe-type/view/:id',
    Component: RecipeTypeView,
  },
];

export default RecipeTypeRoutes;
