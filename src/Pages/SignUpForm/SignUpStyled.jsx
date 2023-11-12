import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #38ecc8;
  text-decoration: underline;
`;
export const StyledLoginForm = styled.form`
  font-size: calc((1vh + 1vw));
  border: 3px solid lightblue;

  width: calc((10vh + 20vw) * 2.2);
  padding: 40px 20px;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: rgba(65, 88, 208, 0.5);
  background: linear-gradient(
    43deg,
    rgba(65, 88, 208, 0.7) 0%,
    rgba(200, 80, 192, 0.8) 46%,
    rgba(255, 204, 112, 0.7) 100%
  );
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  font-weight: bold;
  color: #38ecc8;
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.2);

  background-color: inherit;
  border: none;

  outline: none;
  border-bottom: 3px solid #38ecc8;
  &:invalid {
    background-color: red;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ButtonsStyled = styled.button`
  width: fit-content;
  text-decoration: none;
  margin-left: 20px;
  padding: 0.4rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  height: 3rem;
  color: #38ecc8;
  border: 3px solid #38ecc8;
  align-items: center;
  border-color: #38ecc8;
  font-size: 24px;
  background: transparent;
  &:hover {
    scale: -1px;
    color: #ce38ec;
    border-color: #ce38ec;
    text-shadow: 0 3px 3px #38ecc8;
  }
`;
export const BtnContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BtnContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #38ecc8;
`;
export const LinkStyled = styled(Link)`
  margin-left: 5px;
  font-size: 30px;
  color: #6b38ec;
  text-decoration: none;
  &:hover {
    color: #28a999;
  }
`;
