import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import {
  Container,
  Overlay,
  Button,
  CloseSvg,
  ModalContent,
} from './Modal.styled.js';

export const Modal = ({ children, onCloseModal }) => {
  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleOverlayClick} />

      <Container>
        <ModalContent>
          <Button type="button" onClick={onCloseModal}>
            <CloseSvg />
          </Button>
          {children}
        </ModalContent>
      </Container>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
