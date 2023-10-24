import React, { useEffect } from 'react';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import { Button } from './AddFeedbackBtn.styled.js';

const AddFeedbackBtn = () => {
  const { getOwnReview, isModalOpen, onOpenModal } = useGetOwnReview();

  useEffect(() => {
    if (isModalOpen) {
      getOwnReview();
    }
  }, [isModalOpen]);

  return (
    <Button
      type="button"
      onClick={() => {
        onOpenModal();
      }}
    >
      Feedback
    </Button>
  );
};

export default AddFeedbackBtn;
