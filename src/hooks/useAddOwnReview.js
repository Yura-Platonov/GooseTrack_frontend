import { useDispatch, useSelector } from 'react-redux';
import { addOwnReviewThunk } from '../redux/feedback/operations.js';
import { selectUser } from '../redux/auth/selectors.js';
import { selectReviews, selectError } from '../redux/feedback/selectors.js';
import { Notify } from 'notiflix';

const useAddOwnReview = () => {
  const dispatch = useDispatch(),
    { username } = useSelector(selectUser),
    review = useSelector(selectReviews),
    error = useSelector(selectError),
    isReview = review.length === 0,
    handleReviewSend = (feedback, rating) => {
      dispatch(
        addOwnReviewThunk({
          name: username,
          comment: feedback,
          stars: rating,
        }),
      ).then((res) => {
        addOwnReviewThunk.fulfilled.match(res)
          ? Notify.success('Your feedback has been successfully sent', {
              width: '260px',
              showOnlyTheLastOne: true,
              position: 'right-top',
              timeout: 2000,
              fontSize: '15px',
              borderRadius: '8px',
              cssAnimationStyle: 'from-top',
            })
          : Notify.failure('Something went wrong, please try again later...', {
              width: '260px',
              showOnlyTheLastOne: true,
              position: 'right-top',
              timeout: 2000,
              fontSize: '15px',
              borderRadius: '8px',
              cssAnimationStyle: 'from-top',
            });
      });
    };

  return { handleReviewSend, isReview, error };
};
export default useAddOwnReview;
