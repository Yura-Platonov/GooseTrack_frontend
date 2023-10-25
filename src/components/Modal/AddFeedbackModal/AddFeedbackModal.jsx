import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal.jsx';
import FeedbackForm from '../FeedbackForm/FeedbackForm.jsx';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import { isOpenSelector } from '../../../redux/modal/selectors.js';

const AddFeedbackModal = () => {
  const { checkIsOpen } = useGetOwnReview();
  const { getModalId } = useDeleteOwnReview();
  const openModalId = getModalId(isOpenSelector.lastResult(), true)[0];
  const isOpen = checkIsOpen(openModalId);

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
