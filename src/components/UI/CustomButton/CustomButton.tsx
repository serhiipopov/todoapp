import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
  name: string;
  handlerButton?: () => void;
}

const WrapperButton = styled(Button)`
  width: 87px;
  height: 43px;
  border-color: #F2EDED;
  color: black;
  text-transform: none;

  &.MuiButtonBase-root {
    &.MuiButton-root {
      &.MuiButton-contained {
        background-color: #5DCB42;
        color: white;
      }
    }
  }
  
  &:checked,
  &:focus {
    background-color: #5DCB42;
    color: white;
  }

  &:hover {
    background: #5DCB42;
    color: white;
    border-color: transparent;
    
    svg {
      fill: white;
    }
  }
`;

const CustomButton = ({
  disabled,
  variant,
  name,
  handlerButton,
  type,
  ...rest
  }: CustomButtonProps) => {
  return (
      <WrapperButton
        type={type}
        disabled={disabled}
        variant={variant}
        onClick={handlerButton}
        size='large'
        {...rest}
      >
        {name}
      </WrapperButton>
  );
};

export default CustomButton;
