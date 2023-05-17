import { useState } from 'react';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';

interface TodoProps {
  task: string;
  completed: boolean;
  isOpenPopup: boolean;
  removeHandler: () => void;
  toggleHandler: () => void;
  handleClose: () => void;
  handleOpen: () => void;
}

const TodoContainer = styled(Box)(({ completed }: { completed: boolean }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: completed ? 'line-through' : 'none',
  padding: '11px 0',
}));

const BoxWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #F3F3F3;
    border-radius: 4px;
}
`;

const ClassesCheckbox = styled(Checkbox)`
  &.Mui-checked {
    color: #5DCB42;
  }
`;

const ClassesTypography = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
`;

const Todo = ({
  task,
  completed,
  toggleHandler,
  isOpenPopup,
  removeHandler,
  handleClose,
  handleOpen,
  }: TodoProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const updatedLetterTask = capitalizeFirstLetter(task);

  return (
    <BoxWrapper
      onMouseLeave={() => setIsFocused(false)}
      onMouseOver={() => setIsFocused(true)}
    >
      <TodoContainer completed={completed}>
        <ClassesCheckbox
          size='small'
          checked={completed}
          onChange={toggleHandler}
        />
        <ClassesTypography variant='h2'>{updatedLetterTask}</ClassesTypography>
      </TodoContainer>
      {isFocused && (
        <IconButton onClick={handleOpen}>
          <DeleteForeverOutlined color='warning' />
        </IconButton>
      )}
      <ConfirmDelete
        isOpen={isOpenPopup}
        onDelete={removeHandler}
        onClose={handleClose}
      />
    </BoxWrapper>
  );
};

export default Todo;
