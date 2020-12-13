import styled, { css } from 'styled-components';
import { shade } from 'polished';
import * as color from '../../styles/colors';

interface ButtonProps {
  transparent?: boolean;
  login?: boolean;
}

export const Container = styled.button<ButtonProps>`
  ${({ login }) =>
    login &&
    css`
      width: 93%;
      height: 3.3em;
      margin: 2.894em auto 0;
      padding: 10px 20px;
      border-radius: 3.6px;
      background-color: ${color.greeny_blue};
      border: solid ${color.greeny_blue};
      text-transform: uppercase;

      &:hover {
        background: ${shade(0.2, color.greeny_blue)};
        border: solid ${shade(0.2, color.greeny_blue)};
      }
    `}

  ${({ transparent }) =>
    transparent &&
    css`
      background: transparent;
      border: none;
    `}
`;
