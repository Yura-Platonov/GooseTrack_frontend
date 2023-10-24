import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsOpen } from '../../../redux/modal/selectors.js';
import Modal from '../Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';

const AddFeedbackModal = () => {
  const { checkIsOpen } = useGetOwnReview();
  const isOpen = checkIsOpen('modal1');

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
