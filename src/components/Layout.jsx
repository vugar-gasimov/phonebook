import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

import Loading from 'Loading/Loading';

const Layout = () => {
  return (
    <div>
      <Header />
      <WrapperOutlet>
        <Suspense fallback={<Loading />}>
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
  min-height: 700px;
`;
