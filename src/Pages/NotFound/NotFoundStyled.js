import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BgImg from '../../images/R.jpg';
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
  color: #8338ec;
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
export const LinkStyled = styled(Link)`
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
