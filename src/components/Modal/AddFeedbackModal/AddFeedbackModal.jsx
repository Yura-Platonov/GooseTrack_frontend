import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsOpen } from '../../../redux/modal/selectors.js';
import Modal from '../Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';

const AddFeedbackModal = () => {
  const isOpen = useSelector(selectIsOpen);

  return (
    <div>
      {isOpen && (
        <Modal>
          <FeedbackForm />
        </Modal>
      )}
    </div>
  );
};

export default AddFeedbackModal;
