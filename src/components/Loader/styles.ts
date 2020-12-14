import styled from 'styled-components';
import * as color from '../../styles/colors';

interface LoaderProps {
  loading?: number;
}

export const Container = styled.div<LoaderProps>`
  display: ${({ loading }) => (loading === 1 ? 'block' : 'none')};

  h3 {
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: ${color.greeny_blue};
    text-align: center;
    z-index: 1;
  }

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const BlurBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  opacity: 0.6;
  z-index: 1;
`;
