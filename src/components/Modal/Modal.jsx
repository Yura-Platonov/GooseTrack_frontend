import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Container, Overlay } from './Modal.styled.js';

const Modal = ({ children, onCloseModal }) => {
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
      <Container>{children}</Container>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
