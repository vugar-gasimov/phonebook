import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const rotateHue = keyframes`
  to {
    filter: hue-rotate(1turn);
  }
`;

export const LoadingWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0px;
  right: 0px;
`;

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(315deg, #03a9f4, #ff0058);
`;

export const TitleContainer = styled.div`
  font-size: 24px;
  color: #333;
  margin: 20px 0;
`;

export const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
export const PhoneBookMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PhoneBookContainer = styled(motion.div)`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: rgba(65, 88, 208, 0.5);
  background: linear-gradient(
    43deg,
    rgba(65, 88, 208, 0.7) 0%,
    rgba(200, 80, 192, 0.8) 46%,
    rgba(255, 204, 112, 0.7) 100%
  );
`;

export const PhoneBookContactsContainer = styled(motion.div)`
  font-family: Arial, sans-serif;
  min-width: 300px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: rgba(65, 88, 208, 0.5);
  background: linear-gradient(
    43deg,
    rgba(65, 88, 208, 0.7) 0%,
    rgba(200, 80, 192, 0.8) 46%,
    rgba(255, 204, 112, 0.7) 100%
  );
`;

export const PhoneBookInputContainer = styled(motion.div)`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  gap: 10px;
  background: linear-gradient(
    315deg,
    rgba(255, 159, 14, 0.6),
    rgba(228, 64, 187, 0.6),
    rgba(101, 90, 220, 0.6),
    rgba(72, 140, 251, 0.6),
    rgba(72, 140, 251, 0.6),
    rgba(41, 219, 188, 0.6),
    rgba(221, 245, 5, 0.6)
  );
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneBookTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: ${props => (props.$active ? '#FFF' : '#000')};
  text-shadow: 0 0 3px ${props => (props.$active ? '#FFF' : 'none')};
`;
export const PhoneBookContactTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 3px white;
`;

export const PhoneBookInput = styled.input`
  flex: 3;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background: linear-gradient(
    43deg,
    rgba(255, 0, 88, 0.8),
    rgba(3, 169, 244, 0.8),
    rgba(200, 80, 192, 0.8) 70%
  );
`;

export const ModalInput = styled.input`
  flex: 3;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  min-width: -webkit-fill-available;
  background: linear-gradient(
    43deg,
    rgba(255, 0, 88, 0.8),
    rgba(3, 169, 244, 0.8),
    rgba(200, 80, 192, 0.8) 70%
  );
  position: relative;
  z-index: 103;
`;

export const PhoneBookContactList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  margin: 0;
`;

export const PhoneBookContactItem = styled.li`
  font-size: 16px;
  margin: 8px 0;
`;

export const PhoneBookButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }
  flex: 1;
  width: fit-content;
  font-size: 18px;
  background-color: rgba(0, 123, 255, 0.5);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;
  margin-top: 8px;

  &:disabled {
    background-color: rgba(0, 123, 255, 0.5);
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: rgba(0, 100, 204, 0.7);
  }
`;

export const DeleteButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      rgba(72, 140, 251, 1),
      rgba(41, 219, 188, 1),
      rgba(221, 245, 5, 1),
      rgba(255, 159, 14, 1),
      rgba(228, 64, 187, 1),
      rgba(101, 90, 220, 1),
      rgba(72, 140, 251, 1)
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }

  width: fit-content;
  background-color: #007bff;

  transition: background-color 0.3s;

  &:disabled {
    background-color: rgba(0, 123, 255, 0.5);
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }

  background-color: rgba(0, 123, 255, 0.5);
  color: #fff;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalSubmit = styled.button`
  margin-top: 10px;
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  left: 220px;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      rgba(72, 140, 251, 1),
      rgba(41, 219, 188, 1),
      rgba(221, 245, 5, 1),
      rgba(255, 159, 14, 1),
      rgba(228, 64, 187, 1),
      rgba(101, 90, 220, 1),
      rgba(72, 140, 251, 1)
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }

  width: fit-content;
  background-color: #007bff;

  transition: background-color 0.3s;

  &:disabled {
    background-color: rgba(0, 123, 255, 0.5);
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }

  background-color: rgba(0, 123, 255, 0.5);
  color: #fff;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PhoneBookHint = styled.p`
  color: #ffd700;
  font-size: 14px;
  margin: 0;
`;

export const PhoneBookInputLabel = styled.p`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: #333;
  margin: 0;
  margin-top: 8px;
`;

export const ModalText = styled.p`
  margin: 0;
`;
