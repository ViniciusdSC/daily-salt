---
to: src/<%= h.changeCase.paramCase(name) %>/routes.ts
---

import { AppRouteInterface } from 'app/components/routes/interfaces';

import <%= h.changeCase.pascalCase(name) %>Home from './pages/home';

const <%= h.changeCase.pascalCase(name) %>Routes: AppRouteInterface[] = [
  {
    path: '/<%= h.changeCase.paramCase(name) %>',
    Component: <%= h.changeCase.pascalCase(name) %>Home,
  },
];

export default <%= h.changeCase.pascalCase(name) %>Routes;
