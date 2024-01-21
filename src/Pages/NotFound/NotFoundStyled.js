import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgImg from '../../images/notFound.jpg';
import { motion } from 'framer-motion';
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BgImg}) no-repeat center center;
  background-size: cover;
`;
export const Content = styled.div`
  text-align: center;
  color: #480ca8;
  background: rgba(26, 188, 156, 0.5);
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;
export const LinkStyled = styled(motion(Link))`
  width: fit-content;
  text-decoration: none;
  margin-left: 20px;
  border: 3px solid #480ca8;
  padding: 0.4rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  height: 3rem;
  color: #480ca8;

  align-items: center;
  font-size: 24px;
`;
