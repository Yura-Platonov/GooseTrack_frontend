import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay } from './Modal.styled.js';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <Container>{children}</Container>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
