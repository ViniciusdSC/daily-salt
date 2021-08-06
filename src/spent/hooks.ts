import { useAppDispatch, useAppSelector } from 'app/store';
import { useState, useEffect } from 'react';
import { SpentFormValues } from './components/form/interfaces';
import { SpentInterface, SpentTableTabType } from './interfaces';
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

export function useSpentTableTab() {
  return useAppSelector(({ spent }) => spent.tableTab);
}

export function useSetSpentTableTab() {
  const dispatch = useAppDispatch();

  return async function (tableTab: SpentTableTabType) {
    dispatch(SpentActions.setTableTab(tableTab));
  };
}

export function useSpentTable() {
  const [models, setModels] = useState<SpentInterface[]>([]);
  const spents = useSpents();
  const spentTableTab = useSpentTableTab();

  useEffect(() => {
    setModels(spents.filter((item) => (
      item.mode === spentTableTab || spentTableTab === 'total'
    )));
  }, [spentTableTab, spents]);

  return models;
}
