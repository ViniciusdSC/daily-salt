import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { RecipeTypeInterface } from 'recipe-type/interfaces';
import { RecipeTypeFormValues } from 'recipe-type/components/form/interfaces';

interface RecipeTypeState {
  list: RecipeTypeInterface[];
}

const initialState: RecipeTypeState = {
  list: [],
};

export const recipeTypeSlice = createSlice({
  name: 'recipe-type',
  initialState,
  reducers: {
    store(state, action: PayloadAction<RecipeTypeFormValues>) {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<RecipeTypeInterface>) {
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
    set(state, action: PayloadAction<RecipeTypeInterface[]>) {
      state.list = action.payload;
    },
  },
});

export const { actions } = recipeTypeSlice;
