import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'Pages/NotFound';
import BgImg from '../images/R.jpg';
import styled from 'styled-components';

import Layout from './Layout';
import Login from '../Pages/LoginForm/Login';
import Register from '../Pages/RegisterForm/Register';
import { LoadingWrapper } from './PhoneBook/PhoneBookStyled';
import { useDispatch } from 'react-redux';
import Home from 'Pages/Home';
import About from 'Pages/About';

const PhoneBook = lazy(() => import('./PhoneBook/PhoneBook'));
const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshThunk())
  // }, [dispatch])
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingWrapper />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route payh="/contacts" element={<PhoneBook />} />
          <Route payh="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-image: url(${BgImg});

  min-height: 100vh;
  background-size: cover;
  background-position: center;
`;
