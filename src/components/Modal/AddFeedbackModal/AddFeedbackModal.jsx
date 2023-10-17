import React from 'react';
import Modal from '../Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

const AddFeedbackModal = ({ open, onCloseModal }) => {
  if (!open) return null;
  return (
    <div>
      <Modal onCloseModal={onCloseModal} open={open}>
        <FeedbackForm onCloseModal={onCloseModal} />
      </Modal>
    </div>
  );
};

export default AddFeedbackModal;
