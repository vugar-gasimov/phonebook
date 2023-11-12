import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 20px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(26, 188, 156, 0.8) 100%
  );
  text-decoration: none;

  width: -webkit-fill-available;
`;

export const FooterContent = styled(motion.div)`
  color: #a581d7;
  padding: 10px;
  text-align: center;
  display: flex;
  gap: 30px;
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    gap: 60px;
  }
`;

export const FooterContentWrapper = styled.div`
  text-align: center;
`;
export const FooterLinks = styled(motion.ul)`
  list-style: none;
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1000px) {
    gap: 200px;
  }
`;

export const StyledNavLink = styled(motion(Link))`
  text-decoration: none;
  color: #8853d3;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding: 0;
  height: auto;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 5px #8338ec;
  }
`;
