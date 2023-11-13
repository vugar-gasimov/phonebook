import ReactDOM from 'react-dom';
import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import {
  CloseButton,
  ModalContent,
  ModalTitle,
  ModalWrapper,
} from './Modal.Styled';

const rootModal = document.querySelector('#modal');

const Modal = ({ children, close }) => {
  const handleKeyDown = useCallback(
    e => {
      console.log(e);
      if (e.key === 'Escape') {
        close();
        toast.info('Modal closed by Escape');
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [close, handleKeyDown]);

  const handleClickOutside = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleClickOutside}>
      <ModalContent>
        <>
          <ModalTitle>Contact</ModalTitle>
        </>
        <CloseButton
          whileHover={{
            scale: 1.7,
            zIndex: 5,
            textShadow: '0px 0px 8px rgba(255, 255, 255)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={close}
        >
          ×
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    rootModal
  );
};
export const ScrollContent = styled.div`
  overflow-y: scroll;
  height: 400px;
`;
export default Modal;
