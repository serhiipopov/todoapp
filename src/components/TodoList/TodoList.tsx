import { Stack } from '@mui/material';
import Todo from '../Todo/Todo';
import { Todo as ITodo } from '../../types/todo';

interface TodoListProps {
  todos: ITodo[];
  removeHandler: (id: string) => void;
  toggleHandler: (id: string) => void;
  handleClose: () => void;
  handleOpen: () => void;
  isOpenPopup: boolean;
}

const TodoList = ({
  todos,
  removeHandler,
  toggleHandler,
  isOpenPopup,
  handleClose,
  handleOpen,
  }: TodoListProps) => {
  return (
    <Stack>
      {todos.map(({ id, task, completed }) => (
        <Todo
          key={id}
          task={task}
          completed={completed}
          removeHandler={() => removeHandler(id)}
          toggleHandler={() => toggleHandler(id)}
          isOpenPopup={isOpenPopup}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
