import { useDispatch } from 'react-redux';
import { editOwnReviewThunk } from '../redux/feedback/operations.js';
import { Notify } from 'notiflix';

const useEditOwnReview = () => {
  const dispatch = useDispatch(),
    handleReviewEdit = (feedBack, rating) => {
      dispatch(
        editOwnReviewThunk({
          comment: feedBack,
          stars: rating,
        }),
      ).then((res) => {
        editOwnReviewThunk.fulfilled.match(res)
          ? Notify.success('Your feedback has been successfully edited', {
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

  return { handleReviewEdit };
};

export default useEditOwnReview;
