import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box as MuiBox, TextField } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { addTodo } from '../../store/todo/slice';
import { styled } from '@mui/material/styles';
import CustomButton from '../UI/CustomButton/CustomButton';
import { validationTodo } from '../../utils/validators';

const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #5DCB42;
    font-size: small;
    text-transform: uppercase;
  }

  &.MuiInputLabel-root {
    align-content: center;
  }

  & .MuiOutlinedInput-root {
    display: flex;
    align-items: center;
    width: 355px;
    height: 43px;

    &.Mui-focused fieldset {
      border-color: #5DCB42;
    }
  }
`;

const Box = styled(MuiBox)`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(CustomButton)`
  width: 122px;
  height: 43px;
`;

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationTodo),
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    const newTodo = {
      task: inputValue,
      id: Date.now().toString() + Math.random().toString(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <CustomTextField
          value={inputValue}
          label='Your task'
          placeholder='Write your checklist text here'
          {...register('task')}
          error={!!errors.task}
          onChange={changeHandler}
          helperText={errors?.task?.message?.toString()}
        />
        <Button
          type='submit'
          variant='outlined'
          name='Add'
        />
      </Box>
    </form>
  );
};

export default TodoForm;
