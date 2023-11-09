import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <StyledNavLink to="/">Phone book</StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/">About us</StyledNavLink>
      <StyledNavLink to="/">Services</StyledNavLink>

      <StyledNavLink to="/">Sign up</StyledNavLink>
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
