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

import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';
import { loginThunk } from 'Redux/Auth/operations';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  const handleExit = () => {
    navigate('/');
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Flex>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <BtnContainerOne>
          <ButtonsStyled onClick={handleExit} type="button">
            Exit
          </ButtonsStyled>
        </BtnContainerOne>
        <StyledTitle>Login</StyledTitle>

        <br />
        <StyledLabel>
          Email:
          <StyledInput
            {...register('email', { required: true, minLength: 5 })}
          />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput
            {...register('password', { required: true, minLength: 5 })}
          />
        </StyledLabel>
        <br />
        <BtnContainerTwo>
          {' '}
          <ButtonsStyled type="submit">Login</ButtonsStyled>
          <ButtonsStyled onClick={() => reset()} type="button">
            Clean
          </ButtonsStyled>
        </BtnContainerTwo>

        <br />
        <Span>
          If you don't have an account
          <span>
            <LinkStyled to="/register">Sign up</LinkStyled>
          </span>
        </Span>
      </StyledLoginForm>
    </Flex>
  );
};

export default Login;
