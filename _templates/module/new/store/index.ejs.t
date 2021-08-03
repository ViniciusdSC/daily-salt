---
to: src/<%= h.changeCase.paramCase(name) %>/store/index.ts
---

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { <%= h.changeCase.pascalCase(name) %>Interface } from '<%= h.changeCase.paramCase(name) %>/interfaces';

interface <%= h.changeCase.pascalCase(name) %>State {}

const initialState: <%= h.changeCase.pascalCase(name) %>State = {};

export const <%= h.changeCase.camelCase(name) %>Slice = createSlice({
  name: '<%= h.changeCase.paramCase(name) %>',
  initialState,
  reducers: {
    set(state, action: PayloadAction<<%= h.changeCase.pascalCase(name) %>Interface>) {
      state = action.payload;
    },
  },
});

export const { actions } = <%= h.changeCase.camelCase(name) %>Slice;
