import {
  StyledInput,
  StyledLabel,
  StyledLoginForm,
  StyledTitle,
  Flex,
} from './RegisterStyled';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import { Navigate } from 'react-router-dom';

export const RegisterForm = () => {
  const { login, isLoggedIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = data => {
    login();
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
          <StyledInput
            $errors={errors}
            {...register('name', {
              required: 'Field is required!',
              minLength: {
                value: 3,
                message: 'Must be more then 3',
              },
            })}
          />
          {errors?.name ? (
            <div style={{ color: 'red' }}>{errors?.name.message}</div>
          ) : null}
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

        <br />
        <StyledLabel>
          Country:
          <select {...register('country', { required: true })}>
            <option value="ukraine">Ukraine</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="azerbaijan">Azerbaijan</option>
          </select>
        </StyledLabel>
        <br />
        <StyledLabel $row>
          <input type="checkbox" {...register('agree')} />
          <span>I agree with rules!</span>
        </StyledLabel>
        <button>Register</button>
        <button onClick={() => reset()} type="button">
          Cancel
        </button>
      </StyledLoginForm>
    </Flex>
  );
};