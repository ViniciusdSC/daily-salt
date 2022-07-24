import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserConfigInterface } from 'user-config/interfaces';

interface UserConfigState {
  model: UserConfigInterface
}

const initialState: UserConfigState = {
  model: {
    dailyGoal: 0,
    weekGoal: 0,
    mounthGoal: 0,
    repeatableGoal: 0,
  },
};

export const userConfigSlice = createSlice({
  name: 'user-config',
  initialState,
  reducers: {
    set(state, action: PayloadAction<UserConfigInterface>) {
      state.model = action.payload;
    },
  },
});

export const { actions } = userConfigSlice;
