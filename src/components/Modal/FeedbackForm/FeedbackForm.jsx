import React from 'react';
import { useFormik } from 'formik';
import { FaStar } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import {
  RatingContainer,
  RatingTitle,
  CloseButton,
  Container,
  Form,
  Input,
  ReviewLabel,
  Textarea,
  ButtonContainer,
  SubmitButton,
  CancelButton,
  faStarStyle,
} from './FeedbackForm.styled.js';

const FeedbackForm = ({ onCloseModal }) => {
  const formik = useFormik({
    initialValues: {
      rating: null,
      feedBack: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container>
      <CloseButton type="button" onClick={onCloseModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Modal closed"
          width="24"
          height="24"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M25.5 8.5L8.5 25.5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 8.5L25.5 25.5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CloseButton>
      <Form onSubmit={formik.handleSubmit}>
        <RatingContainer>
          <RatingTitle>Rating</RatingTitle>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={uuidv4()}>
                <Input
                  name="rating"
                  type="radio"
                  onChange={formik.handleChange}
                  value={ratingValue}
                />
                <FaStar
                  name="hover"
                  size={24}
                  style={faStarStyle}
                  color={
                    ratingValue <= formik.values.rating ? '#FFAC33' : '#CEC9C1'
                  }
                />
              </label>
            );
          })}
        </RatingContainer>
        <ReviewLabel htmlFor="feedBack">Review</ReviewLabel>
        <Textarea
          id="feedBack"
          name="feedBack"
          placeholder="Enter text"
          onChange={formik.handleChange}
        ></Textarea>
        <ButtonContainer>
          <SubmitButton type="submit">Save</SubmitButton>
          <CancelButton type="button" onClick={onCloseModal}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FeedbackForm;
