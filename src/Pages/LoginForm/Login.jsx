import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
} from './LoginStyled';
import { useForm } from 'react-hook-form';

import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import { loginThunk } from 'Redux/Auth/operations';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const { register, reset, handleSubmit } = useForm;

  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };
  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);

    return <Navigate to="/" />;
  }
  return (
    <Flex>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <StyledTitle>Register</StyledTitle>

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

        <br />

        <button type="button">Login</button>
        <button onClick={() => reset()} type="button">
          Cancel
        </button>
        <br />
        <span>
          If you don't have an account
          <span>
            <Link>Sign up</Link>
          </span>
        </span>
      </StyledLoginForm>
    </Flex>
  );
};

export default Login;
