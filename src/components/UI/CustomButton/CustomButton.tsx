import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  name: string;
  handlerButton?: () => void;
}
const CustomButton = ({
  disabled,
  variant,
  name,
  handlerButton,
  type,
  ...rest
  }: CustomButtonProps) => {
  return (
      <Button
        type={type}
        disabled={disabled}
        variant={variant}
        onClick={handlerButton}
        size='large'
        {...rest}
      >
        {name}
      </Button>
  );
};

export default CustomButton;
