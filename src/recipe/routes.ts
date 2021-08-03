import { AppRouteInterface } from 'app/components/routes/interfaces';

import RecipeCreate from './pages/create';
import RecipeEdit from './pages/edit';
import RecipeHome from './pages/home';
import RecipeView from './pages/view';

const RecipeRoutes: AppRouteInterface[] = [
  {
    path: '/recipe',
    Component: RecipeHome,
  },
  {
    path: '/recipe/create',
    Component: RecipeCreate,
  },
  {
    path: '/recipe/edit/:id',
    Component: RecipeEdit,
  },
  {
    path: '/recipe/view/:id',
    Component: RecipeView,
  },
];

export default RecipeRoutes;
