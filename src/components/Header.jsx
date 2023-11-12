import { logoutThunk } from 'Redux/Auth/operations';
import { selectIsLoggedIn, selectUser } from 'Redux/Auth/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CgProfile } from 'react-icons/cg';
import { GiCyberEye } from 'react-icons/gi';

import {
  HeaderContainer,
  LinkContainer,
  NavContainer,
  NavLinkContainer,
  SignUpBtn,
  SpanStyled,
  StyledNavLink,
  StyledNavLinkProfile,
} from './HeaderStyled';
const Header = () => {
  const { name } = useSelector(selectUser);
  const { image } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <NavContainer transition={{ delay: 0.7 }}>
        <LinkContainer>
          <StyledNavLink
            to="/"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 320 }}
          >
            <GiCyberEye size={20} />
            CTHub
          </StyledNavLink>
        </LinkContainer>
        <LinkContainer></LinkContainer>
        <NavLinkContainer
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Phone book</StyledNavLink>
          <StyledNavLink to="/about">About us</StyledNavLink>
          {!isLoggedIn ? (
            <LinkContainer
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <StyledNavLinkProfile to="/signUp">Sign up</StyledNavLinkProfile>
              <StyledNavLinkProfile to="/login">Login</StyledNavLinkProfile>
            </LinkContainer>
          ) : (
            <LinkContainer
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 320 }}
            >
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
