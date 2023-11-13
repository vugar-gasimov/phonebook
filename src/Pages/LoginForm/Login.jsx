import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
  BtnContainerOne,
  ButtonsStyled,
  LinkStyled,
  BtnContainerTwo,
  Span,
} from './LoginStyled';
import { useForm } from 'react-hook-form';

import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'Redux/Auth/selectors';
import { loginThunk } from 'Redux/Auth/operations';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/');

  const error = useSelector(selectError);
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  const handleExit = () => {
    navigate('/');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Flex>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <BtnContainerOne>
          <ButtonsStyled
            whileHover={{
              scale: 1.1,
              zIndex: 4,
              textShadow: '0px 0px 8px rgba(255, 255, 255)',
              boxShadow: '0px 0px 8px rgba(255, 255, 255)',
            }}
            onClick={handleExit}
            type="button"
          >
            Exit
          </ButtonsStyled>
        </BtnContainerOne>
        <StyledTitle>Login</StyledTitle>

        <br />
        <StyledLabel>
          Email:
          <StyledInput
            placeholder="Enter the email"
            {...register('email', { required: true, minLength: 5 })}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput
            placeholder="Enter the password"
            type="password"
            {...register('password', { required: true, minLength: 5 })}
          />
        </StyledLabel>
        <br />
        <BtnContainerTwo>
          <ButtonsStyled
            whileHover={{
              scale: 1.1,
              zIndex: 4,
              textShadow: '0px 0px 8px rgba(255, 255, 255)',
              boxShadow: '0px 0px 8px rgba(255, 255, 255)',
            }}
            to={goBackRef.current}
            type="submit"
          >
            Login
          </ButtonsStyled>
          <ButtonsStyled
            whileHover={{
              scale: 1.1,
              zIndex: 4,
              textShadow: '0px 0px 8px rgba(255, 255, 255)',
              boxShadow: '0px 0px 8px rgba(255, 255, 255)',
            }}
            onClick={() => reset()}
            type="button"
          >
            Clean
          </ButtonsStyled>
        </BtnContainerTwo>

        <br />
        <Span>
          If you don't have an account
          <span>
            <LinkStyled
              whileHover={{
                scale: 1.1,
                zIndex: 4,
                textShadow: '0px 0px 8px rgba(255, 255, 255)',
              }}
              to="/signUp"
            >
              Sign Up
            </LinkStyled>
          </span>
        </Span>
      </StyledLoginForm>
    </Flex>
  );
};

export default Login;
