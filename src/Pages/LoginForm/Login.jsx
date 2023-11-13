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

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectUser,
} from 'Redux/Auth/selectors';
import { loginThunk } from 'Redux/Auth/operations';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { name } = useSelector(selectUser);
  const goBackRef = useRef(location.state?.from || '/');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const { register, reset, handleSubmit } = useForm();

  const submit = async data => {
    await dispatch(loginThunk(data));
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

  if (isLoggedIn) {
    toast.success(`Welcome${name}`);
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
          <ButtonsStyled to={goBackRef.current} type="submit">
            Login
          </ButtonsStyled>
          <ButtonsStyled onClick={() => reset()} type="button">
            Clean
          </ButtonsStyled>
        </BtnContainerTwo>

        <br />
        <Span>
          If you don't have an account
          <span>
            <LinkStyled to="/signUp">Sign Up</LinkStyled>
          </span>
        </Span>
      </StyledLoginForm>
    </Flex>
  );
};

export default Login;
