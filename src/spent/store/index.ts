import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { SpentInterface, SpentTableTabType } from 'spent/interfaces';
import { SpentFormValues } from 'spent/components/form/interfaces';

interface SpentState {
  list: SpentInterface[];
  tableTab: SpentTableTabType
}

const initialState: SpentState = {
  list: [],
  tableTab: 'daily',
};

export const spentSlice = createSlice({
  name: 'spent',
  initialState,
  reducers: {
    store(state, action: PayloadAction<SpentFormValues>) {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<SpentInterface>) {
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
    set(state, action: PayloadAction<SpentInterface[]>) {
      state.list = action.payload;
    },
    setTableTab(state, action: PayloadAction<SpentTableTabType>) {
      state.tableTab = action.payload;
    },
  },
});

export const { actions } = spentSlice;
