import React from 'react';

const CustomError = ({ errors, name, message }) => {
  return errors[name] && <div>{message || errors[name].message}</div>;
};

export default CustomError;
