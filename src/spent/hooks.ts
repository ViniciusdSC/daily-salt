import { useAppDispatch, useAppSelector } from 'app/store';
import { SpentFormValues } from './components/form/interfaces';
import { SpentInterface } from './interfaces';
import { actions as SpentActions } from './store';

export function useStoreSpent() {
  const dispatch = useAppDispatch();

  return async function (values: SpentFormValues) {
    dispatch(SpentActions.store(values));
  };
}

export function useUpdateSpent() {
  const dispatch = useAppDispatch();

  return async function (id: string, values: SpentFormValues) {
    dispatch(
      SpentActions.update({
        id,
        ...values,
      }),
    );
  };
}

export function useDeleteSpent() {
  const dispatch = useAppDispatch();

  return async function (id: string) {
    dispatch(SpentActions.delete(id));
  };
}

export function useSetSpent() {
  const dispatch = useAppDispatch();

  return async function (spents: SpentInterface[]) {
    dispatch(SpentActions.set(spents));
  };
}

export function useSpents() {
  return useAppSelector(({ spent }) => spent.list);
}

export function useSpentById(id: string) {
  const model = useAppSelector(({ spent }) => spent.list.find((item) => item.id === id));

  if (!model) {
    throw new Error('Spent not found');
  }

  return model;
}
