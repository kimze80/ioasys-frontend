import React, {
  InputHTMLAttributes,
  useRef,
  ReactNode,
  useState,
  useCallback,
} from 'react';
import { FiEye } from 'react-icons/fi';
import { Container, Error, InputContainer } from './styles';
import Button from '../Button';
import xIcon from '../../assets/icons/x.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  clearInputButton?: boolean;
  closeInputOnClick?: () => void;
  type?: string;
}

interface ImageProps {
  icon?: ReactNode;
}

const Input: React.FC<InputProps & ImageProps> = ({
  clearInputButton,
  error,
  icon,
  closeInputOnClick,
  type,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [passwordType, setPasswordType] = useState(type);

  const handleShow = useCallback(() => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType(type);
    }
  }, [passwordType, type]);

  return (
    <Container className="input-main-container">
      <InputContainer className="input-subcontainer" isErrored={error}>
        {icon && icon}
        <input
          ref={inputRef}
          {...rest}
          type={type === 'password' ? passwordType : type}
        />
        {type === 'password' && (
          <Button
            transparent
            className="password-button"
            type="button"
            icon={<FiEye size={20} color="#383743" />}
            onClick={handleShow}
          />
        )}
        {clearInputButton && (
          <Button
            transparent
            icon={<img src={xIcon} alt="" />}
            onClick={closeInputOnClick}
          />
        )}
        {error && <Error>!</Error>}
      </InputContainer>
    </Container>
  );
};

export default Input;
