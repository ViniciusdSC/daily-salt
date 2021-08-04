import { combineReducers, createStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { spentTypeSlice } from 'spent-type/store';
import { spentSlice } from 'spent/store';
import { recipeTypeSlice } from 'recipe-type/store';
import { recipeSlice } from 'recipe/store';
import { userConfigSlice } from 'user-config/store';
import { appBreadcrumbSlice } from 'app/components/breadcrumbs/store';

const rootReducer = combineReducers({
  spentType: spentTypeSlice.reducer,
  spent: spentSlice.reducer,
  recipeType: recipeTypeSlice.reducer,
  recipe: recipeSlice.reducer,
  userConfig: userConfigSlice.reducer,
  appBreadcrumb: appBreadcrumbSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    blacklist: ['appBreadcrumb'],
  },
  rootReducer,
);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
