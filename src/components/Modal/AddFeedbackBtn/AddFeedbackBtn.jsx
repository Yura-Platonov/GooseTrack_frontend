import React, { useEffect, useId } from 'react';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import { Button } from './AddFeedbackBtn.styled.js';

const AddFeedbackBtn = () => {
  const { getOwnReview, checkIsOpen, onOpenModal } = useGetOwnReview();
  const openModalId = useId();
  const isOpen = checkIsOpen(openModalId);

  useEffect(() => {
    if (isOpen) {
      getOwnReview();
    }
  }, [isOpen]);

  return (
    <Button
      type="button"
      onClick={() => {
        onOpenModal(openModalId);
      }}
    >
      Feedback
    </Button>
  );
};

export default AddFeedbackBtn;
