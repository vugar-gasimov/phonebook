import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import BgImg from '../images/R.jpg';
import { ArrowLeft } from 'lucide-react';

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

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BgImg}) no-repeat center center;
  background-size: cover;
`;
const Content = styled.div`
  text-align: center;
  color: #8338ec;
  background: rgba(26, 188, 156, 0.5);
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;
const LinkStyled = styled(Link)`
  width: fit-content;
  text-decoration: none;
  margin-left: 20px;
  border: 2px solid #8338ec;
  padding: 0.4rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  height: 3rem;
  color: #8338ec;
  border: 3px solid transparent;
  align-items: center;
  border-color: #8338ec;
  color: 8338ec;
  font-size: 24px;

  &:hover {
    scale: -1px;
    color: #8338ec;
    border-color: #8338ec;
    text-shadow: 0 3px 3px #ce38ec;
  }
`;
