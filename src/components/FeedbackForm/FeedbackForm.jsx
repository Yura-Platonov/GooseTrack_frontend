import React from 'react';
import { Button, Container } from './FeedbackForm.styled.js';

const FeedbackForm = ({ onCloseModal }) => {
  return (
    <Container>
      <Button type="button" onClick={onCloseModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M25.5 8.5L8.5 25.5"
            stroke="#343434"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 8.5L25.5 25.5"
            stroke="#343434"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quod
      similique beatae id autem ratione mollitia placeat asperiores soluta illum
      aspernatur voluptatibus nostrum, accusamus debitis totam perspiciatis
      error voluptatem aliquam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Voluptatem magni accusamus sapiente hic harum quidem
      dicta id error voluptatibus eaque ipsum incidunt, laboriosam sit porro
      earum aspernatur magnam labore optio!
    </Container>
  );
};

export default FeedbackForm;
