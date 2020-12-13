import styled from 'styled-components';
import { shade } from 'polished';
import * as color from '../../styles/colors';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Logo = styled.div`
  margin-bottom: 4em;

  @media (max-width: 426px) {
    img {
      width: 100%;
    }
  }
`;

export const WelcomeText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  width: 11em;
  line-height: normal;
  margin-bottom: 1.2em;
`;

export const SubText = styled.p`
  font-size: 1.125em;
  text-align: center;
  max-width: 21em;
  margin-bottom: 2.4em;
`;

export const Form = styled.form`
  width: 22em;
  text-align: center;

  .input-main-container:not(:first-child) {
    margin-top: 2em;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const Button = styled.button`
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
`;

export const ErrorMessage = styled.p`
  font-size: 0.76em;
  color: ${color.error};
  margin-top: 0.8em;
`;
