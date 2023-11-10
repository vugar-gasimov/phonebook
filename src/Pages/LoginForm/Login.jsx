import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
} from './LoginStyled';
import { useForm } from 'react-hook-form';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import { loginThunk } from 'Redux/Auth/operations';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
    // reset();
  };

  const handleExit = () => {
    navigate('/');
  };

  if (isLoggedIn) {
    toast.success(`Welcome ${name}`);

    return <Navigate to="/" />;
  }
  return (
    <Flex>
      <StyledLoginForm onSubmit={handleSubmit(submit)}>
        <StyledTitle>Login</StyledTitle>
        <button onClick={handleExit} type="button">
          Exit
        </button>
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

        <button type="submit">Login</button>
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
