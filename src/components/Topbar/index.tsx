import React, { HTMLAttributes } from 'react';
import { Container } from './styles';

const Topbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};

export default Topbar;
