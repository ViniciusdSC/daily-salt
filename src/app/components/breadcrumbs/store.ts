import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppBreadcrumbItem } from './interfaces';

interface AppBreadcrumbState {
  list: AppBreadcrumbItem[];
  current: string;
}

const initialState: AppBreadcrumbState = {
  list: [],
  current: '',
};

export const appBreadcrumbSlice = createSlice({
  name: 'app-breadcrumb',
  initialState,
  reducers: {
    setCurrent(state, action: PayloadAction<string>) {
      state.current = action.payload;
    },
    setList(state, action: PayloadAction<AppBreadcrumbItem[]>) {
      state.list = action.payload;
    },
  },
});

export const { actions } = appBreadcrumbSlice;
