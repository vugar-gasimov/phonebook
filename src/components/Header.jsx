import { logoutThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <nav>
        <div>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Phone book</StyledNavLink>
        </div>
        <div>
          <StyledNavLink to="/about">About us</StyledNavLink>
          {!isLoggedIn ? (
            <div>
              <StyledNavLink to="/register">Sign up</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </div>
          ) : (
            <div>
              <span>{name}</span>
              <button onClick={() => dispatch(logoutThunk())}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0,
    rgba(3, 7, 222, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #c850c0;
  font-size: 24px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px #c850c0;
  }
`;
