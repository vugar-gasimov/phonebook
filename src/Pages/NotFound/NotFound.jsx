import React, { useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';
import { Content, LinkContainer, LinkStyled, Wrapper } from './NotFoundStyled';

const NotFound = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  return (
    <Wrapper>
      <Content>
        <h1>Oops! 404 Not Found</h1>
        <LinkContainer>
          You can go
          <LinkStyled
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
              boxShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            to="/"
          >
            Home
          </LinkStyled>
          or back
          <LinkStyled
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
              boxShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            to={goBackRef.current}
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
          </LinkStyled>
        </LinkContainer>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
