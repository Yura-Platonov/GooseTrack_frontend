import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './AddFeedbackBtn.styled.js';
import { openModal } from '../../../redux/modal/modalSlice.js';

const AddFeedbackBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      type="button"
      onClick={() => {
        dispatch(openModal());
      }}
    >
      Feedback
    </Button>
  );
};

export default AddFeedbackBtn;
