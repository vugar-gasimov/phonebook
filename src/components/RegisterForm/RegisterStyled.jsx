import styled from 'styled-components';
export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: white;
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
  color: white;
`;
export const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: calc((1vh + 1vw) * 1.2);

  background-color: inherit;
  border: none;

  outline: none;
  border-bottom: 1px solid;
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
