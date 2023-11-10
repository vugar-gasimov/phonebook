import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
} from './RegisterStyled';
import { useForm } from 'react-hook-form';

import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn } from 'Redux/Auth/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Flex>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <StyledTitle>Register</StyledTitle>

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

        <button>Sign up</button>
        <button onClick={() => reset()} type="button">
          Cancel
        </button>
        <br />
        <span>
          If you already have an account
          <span>
            <Link>Login</Link>
          </span>
        </span>
      </StyledLoginForm>
    </Flex>
  );
};
export default Register;
