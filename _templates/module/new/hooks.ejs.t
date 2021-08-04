---
to: src/<%= h.changeCase.paramCase(name) %>/hooks.ts
---

import { useAppDispatch, useAppSelector } from 'app/store';
import { <%= h.changeCase.pascalCase(name) %>Interface } from './interfaces';
import { actions as <%= h.changeCase.pascalCase(name) %>Actions } from './store';

export function use<%= h.changeCase.pascalCase(name) %>() {
  return useAppSelector(({ <%= h.changeCase.camelCase(name) %> }) => <%= h.changeCase.camelCase(name) %>);
}

export function useSet<%= h.changeCase.pascalCase(name) %>() {
  const dispatch = useAppDispatch();

  return async function (<%= h.changeCase.camelCase(name) %>: <%= h.changeCase.pascalCase(name) %>Interface) {
    dispatch(<%= h.changeCase.pascalCase(name) %>Actions.set(<%= h.changeCase.camelCase(name) %>));
  };
}
