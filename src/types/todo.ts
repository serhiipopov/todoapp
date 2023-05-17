export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  isLoading: boolean,
  error: string,
}
