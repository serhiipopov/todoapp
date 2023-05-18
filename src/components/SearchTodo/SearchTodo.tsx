import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CheckCircleOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { showAllTodo, showDoneTodo } from '../../store/visibility/slice';
import CustomButton from '../UI/CustomButton/CustomButton';

interface SearchTodoProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

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
    width: 300px;
    height: 43px;

    &.Mui-focused fieldset {
      border-color: #5DCB42;
    }
  }
`;

const ContainerBox = styled(Box)`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

const SearchTodo = ({ changeHandler, value }: SearchTodoProps) => {
  const dispatch = useAppDispatch();
  const { showAll, showDone } = useAppSelector(state => state.visibilityReducer);

  const handleShowAll = () => dispatch(showAllTodo());
  const handleShowDone = () => dispatch(showDoneTodo());

  const isShowAll = showAll ? 'contained' : 'outlined';
  const isShowDone = showDone ? 'contained' : 'outlined';
  const isCheckDone = showDone ? 'white' : '#5DCB42';

  return (
    <ContainerBox>
      <CustomTextField
        value={value}
        placeholder='Search by text...'
        onChange={changeHandler}
      />
      <CustomButton name='All' variant={isShowAll} onClick={handleShowAll} />
      <CustomButton
        name='Done'
        variant={isShowDone}
        startIcon={
        <CheckCircleOutlined sx={{ color: isCheckDone }} />
      }
        onClick={handleShowDone}
      />
    </ContainerBox>
  );
};

export default SearchTodo;
