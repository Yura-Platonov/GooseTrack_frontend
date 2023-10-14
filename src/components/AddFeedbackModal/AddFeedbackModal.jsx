import React from 'react';
import Modal from '../Modal/Modal.jsx';

const AddFeedbackModal = ({ open, onCloseModal }) => {
  if (!open) return null;
  return (
    <div>
      <Modal onCloseModal={onCloseModal}>Feedbackform will be here</Modal>
    </div>
  );
};

export default AddFeedbackModal;
