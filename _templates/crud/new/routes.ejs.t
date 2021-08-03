---
to: src/<%= h.changeCase.paramCase(name) %>/routes.ts
---

import { AppRouteInterface } from 'app/components/routes/interfaces';

import <%= h.changeCase.pascalCase(name) %>Home from './pages/home';
import <%= h.changeCase.pascalCase(name) %>Create from './pages/create';
import <%= h.changeCase.pascalCase(name) %>Edit from './pages/edit';
import <%= h.changeCase.pascalCase(name) %>View from './pages/view';

const <%= h.changeCase.pascalCase(name) %>Routes: AppRouteInterface[] = [
  {
    path: '/<%= h.changeCase.paramCase(name) %>',
    component: <%= h.changeCase.pascalCase(name) %>Home,
  },
  {
    path: '/<%= h.changeCase.paramCase(name) %>/create',
    component: <%= h.changeCase.pascalCase(name) %>Create,
  },
  {
    path: '/<%= h.changeCase.paramCase(name) %>/edit/:id',
    component: <%= h.changeCase.pascalCase(name) %>Edit,
  },
  {
    path: '/<%= h.changeCase.paramCase(name) %>/view/:id',
    component: <%= h.changeCase.pascalCase(name) %>View,
  },
];

export default <%= h.changeCase.pascalCase(name) %>Routes;
