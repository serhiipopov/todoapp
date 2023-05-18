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

const TodoContainer = styled(Box)(({ completed }: { completed: string }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textDecoration: completed === 'true' ? 'line-through' : 'none',
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
  display: block;
  max-width: 350px;
  font-weight: 400;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
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

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  return (
    <BoxWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <TodoContainer completed={String(completed)}>
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
