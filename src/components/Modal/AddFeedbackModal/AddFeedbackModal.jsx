import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';

const AddFeedbackModal = () => {
  const { checkIsOpen } = useGetOwnReview();
  const isOpen = checkIsOpen('modal1');

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <Modal>
          <FeedbackForm />
        </Modal>
      )}
    </>,
    document.getElementById('portal'),
  );
};

export default AddFeedbackModal;
