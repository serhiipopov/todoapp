import { useState } from 'react';
import { Box as MUIBox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { removeTodo, toggleTodo } from './store/todo/slice';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

const Box = styled(MUIBox)`
  width: 556px;
  padding-top: 34px;
`;

const App = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const { todos } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const toggleCompletedHandler = (id: string) => {
    dispatch(toggleTodo(id))
  }

  const handleClose = () => {
    setIsOpenPopup(false);
  };

  const handleOpen = () => {
    setIsOpenPopup(true);
  };

  const removeTodoHandler = (id: string) => {
    dispatch(removeTodo(id))
    handleClose();
  };

  return (
   <Box>
     <TodoList
       todos={todos}
       removeHandler={removeTodoHandler}
       toggleHandler={toggleCompletedHandler}
       handleClose={handleClose}
       handleOpen={handleOpen}
       isOpenPopup={isOpenPopup}
     />
     <TodoForm />
   </Box>
  );
};

export default App;
