import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Container, Overlay } from './Modal.styled.js';
import useDeleteOwnReview from '../../hooks/useDeleteOwnReview.js';

export const Modal = ({ children }) => {
  const { onCloseModal } = useDeleteOwnReview();

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
