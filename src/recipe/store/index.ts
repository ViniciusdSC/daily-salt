import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { RecipeInterface } from 'recipe/interfaces';
import { RecipeFormValues } from 'recipe/components/form/interfaces';

interface RecipeState {
  list: RecipeInterface[];
}

const initialState: RecipeState = {
  list: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    store(state, action: PayloadAction<RecipeFormValues>) {
      state.list.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    update(state, action: PayloadAction<RecipeInterface>) {
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
    set(state, action: PayloadAction<RecipeInterface[]>) {
      state.list = action.payload;
    },
  },
});

export const { actions } = recipeSlice;
