import React, { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import NotFound from 'Pages/NotFound';
import BgImg from '../images/R.jpg';
import styled from 'styled-components';

import Layout from './Layout';
import { LoadingWrapper } from './PhoneBook/PhoneBookStyled';
const PhoneBook = lazy(() => import('./PhoneBook/PhoneBook'));
const App = () => {
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
          <Route index element={<PhoneBook />} />
          <Route path="*" element={<NotFound />} />
        </Route>
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
