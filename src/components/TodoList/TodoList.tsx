import { Stack } from '@mui/material';
import Todo from '../Todo/Todo';
import { Todo as ITodo } from '../../types/todo';

interface TodoListProps {
  todos: ITodo[];
  removeHandler: (id: string) => void;
  toggleHandler: (id: string) => void;
  handleClose: () => void;
  handleOpen: (id: string) => void;
  openPopupId: string;
}

const TodoList = ({
  todos,
  removeHandler,
  toggleHandler,
  openPopupId,
  handleClose,
  handleOpen,
  }: TodoListProps) => {
  return (
    <Stack sx={{ maxWidth: 485 }}>
      {todos?.map(({ id, task, completed }) => {
        const isOpenPopup = openPopupId === id;

        return (
        <Todo
          key={id}
          task={task}
          completed={completed}
          removeHandler={() => removeHandler(id)}
          toggleHandler={() => toggleHandler(id)}
          isOpenPopup={isOpenPopup}
          handleClose={handleClose}
          handleOpen={() => handleOpen(id)}
        />
        )
      })}
    </Stack>
  );
};

export default TodoList;
