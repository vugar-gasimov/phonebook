import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { LoadingWrapper } from './PhoneBook/PhoneBookStyled';

const Layout = () => {
  return (
    <div>
      <Header />
      <WrapperOutlet>
        <Suspense fallback={<LoadingWrapper />}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
      <Footer />
    </div>
  );
};

export default Layout;

const WrapperOutlet = styled.main`
  padding: 20px;
`;
