import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/todo';

export const initialState: TodoState = {
  todos: []
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
        const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
        if (todoIndex !== -1) {
          const doneTodo = state.todos[todoIndex];
          doneTodo.completed = !doneTodo.completed;
          state.todos.splice(todoIndex, 1);
          if (doneTodo.completed) {
            state.todos.push(doneTodo);
          } else {
            state.todos.unshift(doneTodo);
          }
        }
      },
    }
  }
)

export const {
  addTodo,
  removeTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
