import styled from 'styled-components';
import * as color from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 9.438rem;
  padding: 1.3em 2.3em;
  background-image: linear-gradient(
    ${color.medium_pink} 4%,
    ${color.night_blue} 320%
  );
`;
