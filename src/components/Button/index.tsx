import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  login?: boolean;
  transparent?: boolean;
}

interface ImageProps {
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps & ImageProps> = ({
  icon,
  label,
  login,
  transparent,
  ...rest
}) => {
  return (
    <Container {...rest} transparent={transparent} login={login}>
      {icon && icon}
      {label && label}
    </Container>
  );
};

export default Button;
