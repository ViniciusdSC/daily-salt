import { useAppDispatch, useAppSelector } from 'app/store';
import { UserConfigInterface } from './interfaces';
import { actions as UserConfigActions } from './store';

export function useUserConfig() {
  return useAppSelector(({ userConfig }) => userConfig.model);
}

export function useSetUserConfig() {
  const dispatch = useAppDispatch();

  return async function (userConfig: UserConfigInterface) {
    dispatch(UserConfigActions.set(userConfig));
  };
}
