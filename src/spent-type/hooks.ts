import { useAppDispatch, useAppSelector } from 'app/store';
import { SpentTypeFormValues } from './components/form/interfaces';
import { SpentTypeInterface } from './interfaces';
import { actions as SpentTypeActions } from './store';

export function useStoreSpentType() {
  const dispatch = useAppDispatch();

  return async function (values: SpentTypeFormValues) {
    dispatch(SpentTypeActions.store(values));
  };
}

export function useUpdateSpentType() {
  const dispatch = useAppDispatch();

  return async function (id: string, values: SpentTypeFormValues) {
    dispatch(
      SpentTypeActions.update({
        id,
        ...values,
      }),
    );
  };
}

export function useDeleteSpentType() {
  const dispatch = useAppDispatch();

  return async function (id: string) {
    dispatch(SpentTypeActions.delete(id));
  };
}

export function useSetSpentType() {
  const dispatch = useAppDispatch();

  return async function (spentTypes: SpentTypeInterface[]) {
    dispatch(SpentTypeActions.set(spentTypes));
  };
}

export function useSpentTypes() {
  return useAppSelector(({ spentType }) => spentType.list);
}

export function useFilterSpentTypes(query = '') {
  return useAppSelector(({ spentType }) => (
    spentType.list.filter((model) => model.name.indexOf(query) > -1)
  ));
}

export function useSpentTypeById(id: string) {
  const model = useAppSelector(({ spentType }) => spentType.list.find((item) => item.id === id));

  if (!model) {
    throw new Error('Spent Type not found');
  }

  return model;
}
