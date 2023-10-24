import React, { useEffect } from 'react';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import { Button } from './AddFeedbackBtn.styled.js';

const AddFeedbackBtn = () => {
  const { getOwnReview, checkIsOpen, onOpenModal } = useGetOwnReview();
  const isOpen = checkIsOpen('modal1');

  useEffect(() => {
    if (isOpen) {
      getOwnReview();
    }
  }, [isOpen]);

  return (
    <Button
      type="button"
      onClick={() => {
        onOpenModal('modal1');
      }}
    >
      Feedback
    </Button>
  );
};

export default AddFeedbackBtn;
