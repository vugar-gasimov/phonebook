import { logoutThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { GiCyberEye } from 'react-icons/gi';
const Header = () => {
  const { name } = useSelector(selectUser);
  const { image } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <NavContainer>
        <LinkContainer>
          <StyledNavLink to="/">
            <GiCyberEye size={20} />
            CTHub
          </StyledNavLink>
        </LinkContainer>
        <LinkContainer></LinkContainer>
        <NavLinkContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Phone book</StyledNavLink>
          <StyledNavLink to="/about">About us</StyledNavLink>
          {!isLoggedIn ? (
            <LinkContainer>
              <StyledNavLinkProfile to="/register">
                Sign up
              </StyledNavLinkProfile>
              <StyledNavLinkProfile to="/login">Login</StyledNavLinkProfile>
            </LinkContainer>
          ) : (
            <LinkContainer>
              <SpanStyled>
                {image ? (
                  <img src={image} alt={name} width={32} />
                ) : (
                  <CgProfile size={32} />
                )}
                {name}
              </SpanStyled>
              <SignUpBtn onClick={() => dispatch(logoutThunk())}>
                Logout
              </SignUpBtn>
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
    rgba(26, 188, 156, 0.8) 100%
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
  flex-wrap: wrap;
`;
const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 425px) {
    flex-direction: row;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #8338ec;
  font-size: 30px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px #8338ec;
  }
`;

const StyledNavLinkProfile = styled(NavLink)`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid #8338ec;
  color: #905cd7;
  font-size: 30px;
  padding: 8px 16px;
  border-radius: 30px;
  &:hover {
    text-shadow: 0 0 3px #8338ec;
  }
`;

const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 3px solid #8338ec;
  color: #8f60d1;
  font-size: 24px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 30px;
  &:hover {
    text-shadow: 0 0 3px #8338ec;
  }
`;

const SignUpBtn = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  border: 2px solid #8338ec;
  color: #9568d5;
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px #8338ec;
  }
`;
