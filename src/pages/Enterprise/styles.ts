import styled from 'styled-components';
import * as color from '../../styles/colors';

export const Container = styled.div`
  .topbar-enterprise {
    display: flex;
    padding: 2em;
  }

  .enperprise-name-container {
    display: flex;
    align-items: center;
    align-self: flex-end;

    .goback-button {
      margin-right: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.75em;
      width: 3.75em;
    }

    .enterprise-name {
      font-size: 2.125em;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const Content = styled.div`
  min-height: calc(100vh - 155px);
  position: relative;
  padding: 48px;

  @media (max-width: 426px) {
    padding: 30px 20px;
  }
`;

export const EnterpriseCard = styled.div`
  background: #fff;
  padding: 25px 40px 40px;

  min-height: 200px;
  margin-bottom: 20px;

  .enterprise-photo {
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 18.4em;
  }

  .enterprise-description {
    display: block;
    line-height: 40px;
    font-size: 2.125em;
    color: ${color.warm_grey};
    margin-top: 25px;
  }

  @media (max-width: 426px) {
    padding: 20px;

    .enterprise-description {
      line-height: 32px;
    }
  }
`;
