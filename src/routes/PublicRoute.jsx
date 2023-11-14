import { selectIsLoggedIn, selectUser } from 'Redux/auth/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PublicRoute = ({ children }) => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    toast.success(`Welcome${name}`);
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
