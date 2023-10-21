import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { useEffect } from 'react';
import { Container, Overlay } from './Modal.styled.js';

export const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={handleOverlayClick} />
      <Container>{children}</Container>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
