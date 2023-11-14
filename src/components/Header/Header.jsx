import { logoutThunk } from 'Redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'Redux/auth/selectors';
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
} from './headerStyled';
import { useLocation } from 'react-router-dom';

const navContainerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 320,
    },
  },
};

const linkContainerVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      stiffness: 320,
    },
  },
};

const Header = () => {
  const { name } = useSelector(selectUser);
  const { image } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <HeaderContainer>
      <NavContainer
        initial="hidden"
        animate="visible"
        variants={navContainerVariants}
      >
        <LinkContainer variants={linkContainerVariants}>
          <StyledNavLink
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 320 }}
            to="/"
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
          <StyledNavLink
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            to="/contacts"
          >
            Phone book
          </StyledNavLink>
          <StyledNavLink
            whileHover={{
              scale: 1.1,
              textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            to="/about"
          >
            About us
          </StyledNavLink>
          {!isLoggedIn ? (
            <LinkContainer
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <StyledNavLinkProfile
                whileHover={{
                  scale: 1.1,
                  textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                  boxShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                state={{ from: location }}
                to="/signUp"
              >
                Sign up
              </StyledNavLinkProfile>
              <StyledNavLinkProfile
                whileHover={{
                  scale: 1.1,
                  textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                  boxShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                state={{ from: location }}
                to="/login"
              >
                Login
              </StyledNavLinkProfile>
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
              <SignUpBtn
                whileHover={{
                  scale: 1.1,
                  textShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                  boxShadow: ' 0px 0px 8px rgba(255, 255, 255,)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => dispatch(logoutThunk())}
              >
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
