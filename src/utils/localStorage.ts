import { Todo } from '../types/todo';

export const setStateToLocalStorage = (state: Todo[], str: string) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(str, serializedState);
  } catch (err) {
    console.log(err);
  }
}

export const getStateFromLocalStorage = (str: string) => {
  const serializedState = localStorage.getItem(str);
  if (serializedState === null) {
    return undefined;
  }

  return JSON.parse(serializedState);
}
