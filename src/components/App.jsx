import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'Pages/notFound/NotFound';
import BgImg from '../images/R.jpg';
import styled from 'styled-components';

import Layout from './Layout';
import Login from '../Pages/loginForm/Login';
import SignUp from '../Pages/signUpForm/SignUp';

import { useDispatch, useSelector } from 'react-redux';
import Home from 'Pages/home/Home';
import About from 'Pages/About';
import { refreshThunk } from 'Redux/auth/operations';
import { PrivateRoute } from 'routes/PrivateRoute';
import { selectRefresh } from 'Redux/auth/selectors';
import Loading from 'loading/Loading';
import PublicRoute from 'routes/PublicRoute';

const PhoneBook = lazy(() => import('./PhoneBook/PhoneBook'));

const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return refresh ? (
    <Loading />
  ) : (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <PhoneBook />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signUp"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: #023d8a;
  background-image: url(${BgImg});

  min-height: 100vh;
  background-size: cover;
  background-position: center;
  mix-blend-mode: multiply;
`;
