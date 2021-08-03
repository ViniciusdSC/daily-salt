import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { SpentTypeInterface } from 'spent-type/interfaces';
import { SpentTypeFormValues } from 'spent-type/components/form/interfaces';

interface SpentTypeState {
  list: SpentTypeInterface[];
}

const initialState: SpentTypeState = {
  list: [],
};

export const spentTypeSlice = createSlice({
  name: 'spent-type',
  initialState,
  reducers: {
    store(state, action: PayloadAction<SpentTypeFormValues>) {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<SpentTypeInterface>) {
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
    set(state, action: PayloadAction<SpentTypeInterface[]>) {
      state.list = action.payload;
    },
  },
});

export const { actions } = spentTypeSlice;
