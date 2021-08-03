---
to: src/<%= h.changeCase.paramCase(name) %>/store/index.ts
---

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { <%= h.changeCase.pascalCase(name) %>Interface } from '<%= h.changeCase.paramCase(name) %>/interfaces';
import { <%= h.changeCase.pascalCase(name) %>FormValues } from '<%= h.changeCase.paramCase(name) %>/components/form/interfaces';

interface <%= h.changeCase.pascalCase(name) %>State {
  list: <%= h.changeCase.pascalCase(name) %>Interface[];
}

const initialState: <%= h.changeCase.pascalCase(name) %>State = {
  list: [],
};

export const <%= h.changeCase.camelCase(name) %>Slice = createSlice({
  name: '<%= h.changeCase.paramCase(name) %>',
  initialState,
  reducers: {
    store(state, action: PayloadAction<<%= h.changeCase.pascalCase(name) %>FormValues>) {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<<%= h.changeCase.pascalCase(name) %>Interface>) {
      const index = state.list.findIndex(
        (model) => model.id === action.payload.id,
      );

      if (index >= 0) {
        state.list[index] = action.payload;
      }
    },
    delete(state, action: PayloadAction<string>) {
      state.list = [...state.list].filter(
        (spentType) => spentType.id !== action.payload,
      );
    },
    set(state, action: PayloadAction<<%= h.changeCase.pascalCase(name) %>Interface[]>) {
      state.list = action.payload;
    },
  },
});

export const { actions } = <%= h.changeCase.camelCase(name) %>Slice;
