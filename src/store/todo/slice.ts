import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/todo';

export const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: '',
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos = [...state.todos, {...action.payload}]
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const doneTodo = state.todos.find(todo => todo.id === action.payload)
      if (doneTodo) {
        doneTodo.completed = !doneTodo.completed
      }
    }
  }
})

export const {
  addTodo,
  removeTodo,
  toggleTodo
} = todoSlice.actions;

export default todoSlice.reducer;
