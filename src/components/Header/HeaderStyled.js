import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0,
    rgba(26, 188, 156, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

export const LinkContainer = styled(motion.div)`
  display: flex;
  gap: 15px;
`;

export const NavContainer = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const NavLinkContainer = styled(motion.div)`
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
export const StyledNavLink = styled(motion(NavLink))`
  text-decoration: none;
  color: #b5179e;
  font-size: 30px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
`;

export const StyledNavLinkProfile = styled(motion(NavLink))`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid #8338ec;
  color: #905cd7;
  font-size: 30px;
  padding: 8px 16px;
  border-radius: 30px;
`;

export const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 3px solid #b5179e;
  color: #b5179e;
  font-size: 24px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 30px;
`;

export const SignUpBtn = styled(motion.button)`
  color: #b5179e;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  border: 2px solid #b5179e;

  font-size: 24px;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
`;
