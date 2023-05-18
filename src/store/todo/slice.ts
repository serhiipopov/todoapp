import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/todo';
import { setStateToLocalStorage } from '../../utils/localStorage';

export const initialState: TodoState = {
  todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo(state, action: PayloadAction<Todo>) {
        state.todos = [...state.todos, {...action.payload}]
        setStateToLocalStorage(state.todos, 'todos')
      },
      getAll(state, action: PayloadAction<Todo[]>) {
        state.todos = action.payload;
      },
      removeTodo(state, action: PayloadAction<string>) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload)
        setStateToLocalStorage(state.todos, 'todos')
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
        setStateToLocalStorage(state.todos, 'todos')
      },
    }
  }
)

export const {
  getAll,
  addTodo,
  removeTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
