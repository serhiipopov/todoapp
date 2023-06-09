import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/slice';
import visibilityReducer from './visibility/slice';

const rootReducer = combineReducers({
  todoReducer,
  visibilityReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const store = setupStore();
