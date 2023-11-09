import styled, { keyframes } from 'styled-components';

const rotateHue = keyframes`
  to {
    filter: hue-rotate(1turn);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;

  inset: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  overflow: hidden;
  max-width: 1000px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  min-width: 300px;
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
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 102;
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
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 101;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 3px #fff;
`;

export const ModalText = styled.p`
  margin: 0;
`;
