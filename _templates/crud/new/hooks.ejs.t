---
to: src/<%= h.changeCase.paramCase(name) %>/hooks.ts
---

import { useAppDispatch, useAppSelector } from 'app/store';
import { <%= h.changeCase.pascalCase(name) %>FormValues } from './components/form/interfaces';
import { <%= h.changeCase.pascalCase(name) %>Interface } from './interfaces';
import { actions as <%= h.changeCase.pascalCase(name) %>Actions } from './store';

export function useStore<%= h.changeCase.pascalCase(name) %>() {
  const dispatch = useAppDispatch();

  return async function (values: <%= h.changeCase.pascalCase(name) %>FormValues) {
    dispatch(<%= h.changeCase.pascalCase(name) %>Actions.store(values));
  };
}

export function useUpdate<%= h.changeCase.pascalCase(name) %>() {
  const dispatch = useAppDispatch();

  return async function (id: string, values: <%= h.changeCase.pascalCase(name) %>FormValues) {
    dispatch(
      <%= h.changeCase.pascalCase(name) %>Actions.update({
        id,
        ...values,
      }),
    );
  };
}

export function useDelete<%= h.changeCase.pascalCase(name) %>() {
  const dispatch = useAppDispatch();

  return async function (id: string) {
    dispatch(<%= h.changeCase.pascalCase(name) %>Actions.delete(id));
  };
}

export function useSet<%= h.changeCase.pascalCase(name) %>() {
  const dispatch = useAppDispatch();

  return async function (<%= h.changeCase.camelCase(name) %>s: <%= h.changeCase.pascalCase(name) %>Interface[]) {
    dispatch(<%= h.changeCase.pascalCase(name) %>Actions.set(<%= h.changeCase.camelCase(name) %>s));
  };
}

export function use<%= h.changeCase.pascalCase(name) %>s() {
  return useAppSelector(({ <%= h.changeCase.camelCase(name) %> }) => <%= h.changeCase.camelCase(name) %>.list);
}

export function use<%= h.changeCase.pascalCase(name) %>ById(id: string) {
  const model = useAppSelector(({ <%= h.changeCase.camelCase(name) %> }) => <%= h.changeCase.camelCase(name) %>.list.find((item) => item.id === id));

  if (!model) {
    throw new Error('<%= h.changeCase.sentenceCase(name) %> not found');
  }

  return model;
}
