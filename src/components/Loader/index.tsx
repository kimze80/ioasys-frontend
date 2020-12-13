import React from 'react';
import ReactLoading from 'react-loading';
import { Container, BlurBackground } from './styles';
import * as color from '../../styles/colors';

interface LoaderProps {
  loading?: number;
  loadingText?: string;
}

const Loader: React.FC<LoaderProps> = ({ loading, loadingText }) => {
  return (
    <Container loading={loading}>
      <BlurBackground />
      <ReactLoading
        type="spin"
        color={color.greeny_blue}
        height={120}
        width={120}
      />
      <h3>{loadingText}</h3>
    </Container>
  );
};

export default Loader;
