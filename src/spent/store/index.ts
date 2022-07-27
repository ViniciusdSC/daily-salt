import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { AccumulatedBalance, SpentInterface, SpentTableTabType } from 'spent/interfaces';
import { SpentFormValues } from 'spent/components/form/interfaces';

interface SpentState {
  list: SpentInterface[];
  tableTab: SpentTableTabType;
  accumulatedBalance: AccumulatedBalance;
}

const initialState: SpentState = {
  list: [],
  tableTab: 'daily',
  accumulatedBalance: {
    daily: 0,
    weekly: 0,
    monthly: 0,
  },
};

export const spentSlice = createSlice({
  name: 'spent',
  initialState,
  reducers: {
    store(state, action: PayloadAction<SpentFormValues>) {
      state.list.push({
        id: uuidv4(),
        createdAt: new Date(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<Omit<SpentInterface, 'createdAt'>>) {
      const index = state.list.findIndex(
        (model) => model.id === action.payload.id,
      );

      if (index >= 0) {
        state.list[index] = {
          ...action.payload,
          createdAt: state.list[index].createdAt,
        };
      }
    },
    delete(state, action: PayloadAction<string>) {
      state.list = [...state.list].filter(
        (spentType) => spentType.id !== action.payload,
      );
    },
    set(state, action: PayloadAction<SpentInterface[]>) {
      state.list = action.payload;
    },
    setTableTab(state, action: PayloadAction<SpentTableTabType>) {
      state.tableTab = action.payload;
    },
    setDailyAccumulatedBalance(state, action: PayloadAction<number>) {
      state.accumulatedBalance.daily = action.payload;
    },
    setWeeklyAccumulatedBalance(state, action: PayloadAction<number>) {
      state.accumulatedBalance.weekly = action.payload;
    },
    setMonthlyAccumulatedBalance(state, action: PayloadAction<number>) {
      state.accumulatedBalance.monthly = action.payload;
    },
  },
});

export const { actions } = spentSlice;
