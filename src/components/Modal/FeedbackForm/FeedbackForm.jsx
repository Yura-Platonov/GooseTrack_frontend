import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaStar, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { v4 as uuidv4 } from 'uuid';
import useAddOwnReview from '../../../hooks/useAddOwnReview.js';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import useEditOwnReview from '../../../hooks/useEditOwnReview.js';
import Spinner from '../../Spinner/spinner.jsx';
import {
  RatingContainer,
  RatingTitle,
  FormCloseButton,
  Container,
  Form,
  Input,
  ReviewLabel,
  Textarea,
  FormButtonContainer,
  SubmitButton,
  CancelButton,
  ValidationMessage,
  ReviewHeaderContainer,
  ReviewBtnContainer,
  ReviewEditButton,
  ReviewDeleteButton,
  faStarStyle,
} from './FeedbackForm.styled.js';

const FeedbackForm = () => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const { handleReviewSend, isReview } = useAddOwnReview();
  const { review, isLoading } = useGetOwnReview();
  const { deleteOwnReview, onCloseModal } = useDeleteOwnReview();
  const { handleReviewEdit } = useEditOwnReview();
  const changeMode = isReview ? isReview : editMode;

  const formik = useFormik({
    initialValues: {
      rating: isReview ? 4 : review.stars,
      feedBack: review.comment,
    },
    onSubmit: (values) => {
      isReview
        ? handleReviewSend(values.feedBack, values.rating)
        : handleReviewEdit(values.feedBack, values.rating);
      onCloseModal('modal1');
    },

    validationSchema: Yup.object().shape({
      rating: Yup.string().required(
        'Kindly give us a rating by clicking on the star icon!',
      ),
      feedBack: Yup.string()
        .max(300, 'Too Long!')
        .required('Your feedback is highly appreciated!'),
    }),
  });
  return (
    <Container>
      {isLoading && <Spinner />}
      <FormCloseButton
        type="button"
        onClick={() => {
          onCloseModal('modal1');
        }}
      >
        <RxCross2 size={24} />
      </FormCloseButton>
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
                  onBlur={formik.handleBlur}
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
                {i === 4 && (
                  <ValidationMessage>
                    {formik.errors.rating &&
                      formik.touched.rating &&
                      formik.errors.rating}
                  </ValidationMessage>
                )}
              </label>
            );
          })}
        </RatingContainer>
        <ReviewHeaderContainer>
          <ReviewLabel htmlFor="feedBack">Review</ReviewLabel>
          {!isReview && (
            <ReviewBtnContainer>
              <ReviewEditButton
                type="button"
                onClick={() => {
                  toggleEditMode();
                }}
              >
                <FaPencilAlt size={16} />
              </ReviewEditButton>
              <ReviewDeleteButton
                type="button"
                onClick={() => {
                  deleteOwnReview();
                  onCloseModal('modal1');
                }}
              >
                <FaTrashAlt size={16} />
              </ReviewDeleteButton>
            </ReviewBtnContainer>
          )}
        </ReviewHeaderContainer>
        <Textarea
          id="feedBack"
          name="feedBack"
          placeholder="Enter text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.feedBack}
        ></Textarea>
        <ValidationMessage>
          {formik.errors.feedBack &&
            formik.touched.feedBack &&
            formik.errors.feedBack}
        </ValidationMessage>
        {changeMode && (
          <FormButtonContainer>
            <SubmitButton type="submit">
              {isReview ? 'Save' : 'Edit'}
            </SubmitButton>
            <CancelButton
              type="button"
              onClick={() => {
                onCloseModal('modal1');
              }}
            >
              Cancel
            </CancelButton>
          </FormButtonContainer>
        )}
      </Form>
    </Container>
  );
};

export default FeedbackForm;
