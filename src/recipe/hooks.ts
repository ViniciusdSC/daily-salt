import { useAppDispatch, useAppSelector } from 'app/store';
import { RecipeFormValues } from './components/form/interfaces';
import { RecipeInterface } from './interfaces';
import { actions as RecipeActions } from './store';

export function useStoreRecipe() {
  const dispatch = useAppDispatch();

  return async function (values: RecipeFormValues) {
    dispatch(RecipeActions.store(values));
  };
}

export function useUpdateRecipe() {
  const dispatch = useAppDispatch();

  return async function (id: string, values: RecipeFormValues) {
    dispatch(
      RecipeActions.update({
        id,
        ...values,
      }),
    );
  };
}

export function useDeleteRecipe() {
  const dispatch = useAppDispatch();

  return async function (id: string) {
    dispatch(RecipeActions.delete(id));
  };
}

export function useSetRecipe() {
  const dispatch = useAppDispatch();

  return async function (recipes: RecipeInterface[]) {
    dispatch(RecipeActions.set(recipes));
  };
}

export function useRecipes() {
  return useAppSelector(({ recipe }) => recipe.list);
}

export function useRecipeById(id: string) {
  const model = useAppSelector(({ recipe }) => recipe.list.find((item) => item.id === id));

  if (!model) {
    throw new Error('Recipe not found');
  }

  return model;
}
