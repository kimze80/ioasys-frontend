import styled, { css } from 'styled-components';
import * as color from '../../styles/colors';

interface ContainerProps {
  isErrored: boolean | undefined;
}

export const Container = styled.div``;

export const InputContainer = styled.div<ContainerProps>`
  border: 0;
  border-bottom: 0.6px solid;
  outline: 0;
  padding: 2px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-bottom: 0.6px solid ${color.error};
    `}

  img {
    margin-right: 0.6em;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${color.charcoal_grey_two};

    &::placeholder {
      color: ${color.charcoal_grey};
      opacity: 0.5;
      font-size: 1.125em;
    }
  }
`;

export const Error = styled.div`
  height: 1.5em;
  width: 1.5em;
  margin-left: 16px;
  background-color: ${color.error};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 1em;
`;
