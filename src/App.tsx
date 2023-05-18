import {
  useDeferredValue,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getAll, removeTodo, toggleTodo } from './store/todo/slice';
import { getStateFromLocalStorage } from './utils/localStorage';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import SearchTodo from './components/SearchTodo/SearchTodo';
import { Todo } from './types/todo';

const ContainerBox = styled(Box)`
  width: 556px;
  padding: 34px 55px 0 16px;
`;

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [openPopupId, setOpenPopupId] = useState<string>('');
  const { todos } = useAppSelector(state => state.todoReducer);
  const { showDone } = useAppSelector(state => state.visibilityReducer);
  const dispatch = useAppDispatch();
  const deferredSearchValue = useDeferredValue(searchValue);

  const storedFrameTodos = getStateFromLocalStorage('todos');

  useEffect(() => {
    if (storedFrameTodos !== undefined) {
      dispatch(getAll(storedFrameTodos));
    }
  }, [dispatch]);

  const toggleCompletedHandler = (id: string) => {
    dispatch(toggleTodo(id))
  }

  const handleOpenPopup = (id: string) => {
    setOpenPopupId(id);
  };

  const handleClosePopup = () => {
    setOpenPopupId('');
  };

  const removeTodoHandler = (id: string) => {
    dispatch(removeTodo(id))
    handleClosePopup();
  };

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const sortedTodo = useMemo(() => {
    return todos.filter(todo => todo.task.toLowerCase().includes(deferredSearchValue.toLowerCase()))
  }, [todos, deferredSearchValue]);

  const filteredDoneTodos = sortedTodo.filter((todo: Todo) => todo.completed);
  const visibleTodos = showDone ? filteredDoneTodos : sortedTodo;

  return (
   <ContainerBox>
     <SearchTodo
       value={searchValue}
       changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => changeSearchHandler(e)}
     />
     { !todos.length && <Typography variant='h5'>No tasks yet!</Typography> }
     <TodoList
       todos={visibleTodos}
       removeHandler={removeTodoHandler}
       toggleHandler={toggleCompletedHandler}
       handleClose={handleClosePopup}
       handleOpen={handleOpenPopup}
       openPopupId={openPopupId}
     />
     <TodoForm />
   </ContainerBox>
  );
};

export default App;
