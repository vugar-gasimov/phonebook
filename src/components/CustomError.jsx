import { ErrorMessage } from 'Pages/SignUpForm/SignUpStyled';
import React from 'react';

const CustomError = ({ errors, name, message }) => {
  return (
    errors[name] && (
      <ErrorMessage>{message || errors[name].message}</ErrorMessage>
    )
  );
};

export default CustomError;
