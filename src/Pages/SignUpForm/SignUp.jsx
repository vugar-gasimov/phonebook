import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
  BtnContainerOne,
  ButtonsStyled,
  BtnContainerTwo,
  Span,
  LinkStyled,
} from './SignUpStyled';
import { useForm } from 'react-hook-form';

import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const submit = data => {
    dispatch(registerThunk(data));
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
        <StyledTitle>Sign up</StyledTitle>

        <br />
        <StyledLabel>
          Name:
          <StyledInput {...register('name', { required: true })} />
        </StyledLabel>
        <br />
        <StyledLabel>
          Email:
          <StyledInput {...register('email', { required: true })} />
        </StyledLabel>
        <br />
        <StyledLabel>
          Password:
          <StyledInput {...register('password', { required: true })} />
        </StyledLabel>
        <br />
        <BtnContainerTwo>
          <ButtonsStyled to="/" type="submit">
            Sign up
          </ButtonsStyled>
          <ButtonsStyled onClick={() => reset()} type="button">
            Clean
          </ButtonsStyled>
        </BtnContainerTwo>

        <br />
        <Span>
          If you already have an account
          <span>
            <LinkStyled to="/login">Login</LinkStyled>
          </span>
        </Span>
      </StyledLoginForm>
    </Flex>
  );
};
export default Register;
