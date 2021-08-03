import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserConfigInterface } from 'user-config/interfaces';

interface UserConfigState {}

const initialState: UserConfigState = {};

export const userConfigSlice = createSlice({
  name: 'user-config',
  initialState,
  reducers: {
    set(state, action: PayloadAction<UserConfigInterface>) {
      state = action.payload;
    },
  },
});

export const { actions } = userConfigSlice;
