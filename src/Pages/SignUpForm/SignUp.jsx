import {
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
import { yupResolver } from '@hookform/resolvers/yup';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'Redux/Auth/operations';
import { selectError, selectIsLoggedIn } from 'Redux/Auth/selectors';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { inputData, schemaRegister } from 'Helpers/schemas';
import CustomError from 'components/CustomError';
import { Input } from 'components/Input';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaRegister) });
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');
  const error = useSelector(selectError);

  const submit = ({ confirmPassword, ...data }) => {
    dispatch(registerThunk(data));
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
    return <Navigate to="/" />;
  }
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
        <StyledTitle>Sign up</StyledTitle>
        {inputData.map(item => (
          <div key={item.name}>
            <Input
              placeholder={item.placeholder}
              name={item.name}
              register={register}
            />
            <CustomError name={item.name} errors={errors} />
          </div>
        ))}

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
            Sign up
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
          If you already have an account
          <span>
            <LinkStyled
              whileHover={{
                scale: 1.1,
                zIndex: 4,
                textShadow: '0px 0px 8px rgba(255, 255, 255)',
              }}
              to="/login"
            >
              Login
            </LinkStyled>
          </span>
        </Span>
      </StyledLoginForm>
    </Flex>
  );
};
export default Register;
