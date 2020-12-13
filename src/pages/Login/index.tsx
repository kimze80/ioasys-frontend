import React, { useCallback, useState } from 'react';
import {
  Container,
  Content,
  WelcomeText,
  Logo,
  SubText,
  Form,
  ErrorMessage,
} from './styles';
import logo from '../../assets/logo-home.png';
import emailIcon from '../../assets/icons/ic-email.svg';
import passwordIcon from '../../assets/icons/ic-cadeado.svg';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!loginData.email || !loginData.password) {
        setError(true);
      } else {
        try {
          setLoading(1);
          setError(false);

          await signIn({
            email: loginData.email,
            password: loginData.password,
          });
          setLoading(0);
          setLoginData({ email: '', password: '' });
        } catch (err) {
          setError(true);
          setLoading(0);
        }
      }
    },
    [loginData.email, loginData.password, signIn],
  );

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.currentTarget;
      value && setError(false);
      setLoginData({
        ...loginData,
        [name]: value,
      });
    },
    [loginData],
  );

  return (
    <Container>
      <Loader loading={loading} />
      <Content className="content">
        <Logo className="logo">
          <img src={logo} alt="" />
        </Logo>
        <WelcomeText>Bem-vindo ao empresas</WelcomeText>
        <SubText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          nobis.
        </SubText>

        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="text"
            icon={<img src={emailIcon} alt="" />}
            placeholder="E-mail"
            onChange={handleChange}
            error={error}
          />
          <Input
            name="password"
            type="password"
            icon={<img src={passwordIcon} alt="" />}
            placeholder="Senha"
            onChange={handleChange}
            error={error}
          />
          {error && (
            <ErrorMessage>
              Credenciais informadas são inválidas, tente novamente.
            </ErrorMessage>
          )}
          <Button login label="Entrar" disabled={error} />
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
