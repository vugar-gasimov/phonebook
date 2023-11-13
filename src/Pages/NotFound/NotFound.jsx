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
          You can go <LinkStyled to="/"> Home </LinkStyled> or back
          <LinkStyled to={goBackRef.current}>
            <ArrowLeft size={28} strokeWidth={2.5} />
          </LinkStyled>
        </LinkContainer>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
