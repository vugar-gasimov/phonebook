import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'Pages/NotFound/NotFound';
import BgImg from '../images/R.jpg';
import styled from 'styled-components';

import Layout from './Layout';
import Login from '../Pages/LoginForm/Login';
import SignUp from '../Pages/SignUpForm/SignUp';

import { useDispatch, useSelector } from 'react-redux';
import Home from 'Pages/Home/Home';
import About from 'Pages/About';
import { refreshThunk } from 'Redux/Auth/operations';
import { PrivateRoute } from 'Hoc/PrivateRoute';
import { selectRefresh } from 'Redux/Auth/selectors';
import Loading from 'Loading/Loading';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
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
