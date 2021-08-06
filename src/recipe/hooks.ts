import { useAppDispatch, useAppSelector } from 'app/store';
import { useEffect, useState } from 'react';
import { RecipeFormValues } from './components/form/interfaces';
import { RecipeInterface, RecipeTableTabType } from './interfaces';
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

export function useRecipeTableTab() {
  return useAppSelector(({ recipe }) => recipe.tableTab);
}

export function useSetRecipeTableTab() {
  const dispatch = useAppDispatch();

  return async function (tableTab: RecipeTableTabType) {
    dispatch(RecipeActions.setTableTab(tableTab));
  };
}

export function useRecipeTable() {
  const [models, setModels] = useState<RecipeInterface[]>([]);
  const recipes = useRecipes();
  const recipeTableTab = useRecipeTableTab();

  useEffect(() => {
    setModels(recipes.filter((item) => (
      item.mode === recipeTableTab || recipeTableTab === 'total'
    )));
  }, [recipeTableTab, recipes]);

  return models;
}
