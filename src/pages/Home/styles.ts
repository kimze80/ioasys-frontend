import styled from 'styled-components';
import * as color from '../../styles/colors';

export const Container = styled.div`
  .topbar-home {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-search {
    position: absolute;
    top: 45px;
    right: 25px;
  }

  .input-main-container {
    .input-subcontainer {
      border-bottom: 0.6px solid #fff;

      input {
        width: inherit;
        height: 2.5em;
        font-size: 2.125em;

        ::placeholder {
          font-size: 1.125em;
        }
      }
    }
  }

  form {
    width: inherit;
  }

  @media (max-width: 426px) {
    .logo-container {
      img {
        height: 40px;
      }

      .button-search {
        top: 18px;
      }
    }
    .input-main-container {
      .input-subcontainer {
        img {
          height: 40px;
        }

        button {
          img {
            height: 25px;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  min-height: calc(100vh - 155px);
  position: relative;
  padding: 3em;

  .initial-message {
    font-size: 2em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ResultCard = styled.div`
  background: #fff;
  padding: 25px;
  display: flex;
  align-items: center;
  min-height: 200px;
  margin-bottom: 20px;

  .enterprise-photo {
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: cover;
      width: 290px;
      height: 158px;
    }
  }

  .enterprise-profile {
    display: block;
    line-height: 34px;

    .enterprise-name {
      font-size: 1.875em;
      font-weight: bold;
      color: ${color.dark_indigo};
    }

    .enterprise-business-type {
      font-size: 1.5em;
      color: ${color.warm_grey};
    }

    .enterprise-country {
      font-size: 1.125em;
      color: ${color.warm_grey};
    }
  }

  @media (max-width: 426px) {
    display: block;

    .enterprise-photo {
      margin: 0 0 10px;
      img {
        width: 100%;
      }
    }
  }
`;
