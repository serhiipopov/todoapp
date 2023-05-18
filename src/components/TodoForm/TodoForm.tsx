import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box as MuiBox, TextField } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { validationTodoForm } from '../../utils/validators';
import { addTodo } from '../../store/todo/slice';
import { styled } from '@mui/material/styles';
import CustomButton from '../UI/CustomButton/CustomButton';

const CustomTextField = styled(TextField)`
  & label.Mui-focused {
    color: #5DCB42;
    font-size: small;
    text-transform: uppercase;
    top: 3px !important;

    &.Mui-error {
      color: #F33A3D;
    }
  }

  & .MuiFormLabel-root {
    &.MuiInputLabel-root {
      align-content: center;
      left: -2px;
      top: -5px;
    }
  }

  & .MuiOutlinedInput-root {
    display: flex;
    align-items: center;
    width: 355px;
    height: 43px;

    &.Mui-focused fieldset {
      border-color: #5DCB42;
    }

    &.Mui-error fieldset {
      border-color: #F33A3D;
    }

    & .MuiFormHelperText-root {
      margin-top: 0;
    }
  }
`;

const Box = styled(MuiBox)`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const Button = styled(CustomButton)`
  width: 120px;
  height: 43px;
  border-color: #5DCB42;
  color: #5DCB42;
  align-self: flex-start;
`;

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(validationTodoForm),
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
          required
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
