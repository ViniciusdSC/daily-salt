import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { AppBreadcrumbItem } from './interfaces';
import { actions as AppBreadcrumbActions } from './store';

export function useAppBreadcrumbList() {
  return useAppSelector(({ appBreadcrumb }) => appBreadcrumb.list);
}

export function useAppBreadcrumbCurrent() {
  return useAppSelector(({ appBreadcrumb }) => appBreadcrumb.current);
}

export function useSetBreadcrumbs(list: AppBreadcrumbItem[], current: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AppBreadcrumbActions.setCurrent(current));
    dispatch(AppBreadcrumbActions.setList(list));
  }, [list, current]);
}
