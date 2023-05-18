import { createSlice } from '@reduxjs/toolkit';
import { VisibilityState } from '../../types/visibility';

const initialState: VisibilityState = {
  showAll: true,
  showDone: false,
};

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    showAllTodo: (state) => {
      state.showAll = true;
      state.showDone = false;
    },
    showDoneTodo: (state) => {
      state.showAll = false;
      state.showDone = true;
    },
  },
});

export const { showAllTodo, showDoneTodo } = visibilitySlice.actions;

export default visibilitySlice.reducer;
