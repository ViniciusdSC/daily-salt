import { useAppDispatch, useAppSelector } from 'app/store';
import { RecipeTypeFormValues } from './components/form/interfaces';
import { RecipeTypeInterface } from './interfaces';
import { actions as RecipeTypeActions } from './store';

export function useStoreRecipeType() {
  const dispatch = useAppDispatch();

  return async function (values: RecipeTypeFormValues) {
    dispatch(RecipeTypeActions.store(values));
  };
}

export function useUpdateRecipeType() {
  const dispatch = useAppDispatch();

  return async function (id: string, values: RecipeTypeFormValues) {
    dispatch(
      RecipeTypeActions.update({
        id,
        ...values,
      }),
    );
  };
}

export function useDeleteRecipeType() {
  const dispatch = useAppDispatch();

  return async function (id: string) {
    dispatch(RecipeTypeActions.delete(id));
  };
}

export function useSetRecipeType() {
  const dispatch = useAppDispatch();

  return async function (recipeTypes: RecipeTypeInterface[]) {
    dispatch(RecipeTypeActions.set(recipeTypes));
  };
}

export function useFilterRecipeTypes(query = '') {
  return useAppSelector(({ recipeType }) => (
    recipeType.list.filter((model) => model.name.indexOf(query) > -1)
  ));
}

export function useRecipeTypes() {
  return useAppSelector(({ recipeType }) => recipeType.list);
}

export function useRecipeTypeById(id: string) {
  const model = useAppSelector(({ recipeType }) => recipeType.list.find((item) => item.id === id));

  if (!model) {
    throw new Error('Recipe type not found');
  }

  return model;
}
