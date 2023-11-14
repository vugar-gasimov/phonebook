import { ErrorMessage } from 'Pages/signUpForm/SignUpStyled';
import React from 'react';

const CustomError = ({ errors, name, message }) => {
  return (
    errors[name] && (
      <ErrorMessage>{message || errors[name].message}</ErrorMessage>
    )
  );
};

export default CustomError;
