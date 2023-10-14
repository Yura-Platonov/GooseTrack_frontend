import React from 'react';
import { Button } from './AddFeedbackBtn.styled.js';

const AddFeedbackBtn = ({ onOpenModal }) => {
  return <Button onClick={onOpenModal}>Feedback</Button>;
};

export default AddFeedbackBtn;
