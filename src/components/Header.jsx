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
      <NavContainer>
        <LinkContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Phone book</StyledNavLink>
        </LinkContainer>
        <NavLinkContainer>
          <StyledNavLink to="/about">About us</StyledNavLink>
          {!isLoggedIn ? (
            <LinkContainer>
              <StyledNavLink to="/register">Sign up</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </LinkContainer>
          ) : (
            <LinkContainer>
              <span>{name}</span>
              <button onClick={() => dispatch(logoutThunk())}>Logout</button>
            </LinkContainer>
          )}
        </NavLinkContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 20px 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0,
    rgba(3, 7, 222, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
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
