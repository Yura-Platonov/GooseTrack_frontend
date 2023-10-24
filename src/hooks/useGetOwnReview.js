import { useDispatch, useSelector } from 'react-redux';
import { getOwnReviewThunk } from '../redux/feedback/operations.js';
import { openModal } from '../redux/modal/modalSlice.js';
import { selectReviews } from '../redux/feedback/selectors.js';
import { selectIsLoading } from '../redux/feedback/selectors.js';
import { selectIsOpen } from '../redux/modal/selectors.js';
import { selectError } from '../redux/feedback/selectors.js';
import { Notify } from 'notiflix';

const useGetOwnReview = () => {
  const dispatch = useDispatch(),
    review = useSelector(selectReviews),
    isLoading = useSelector(selectIsLoading),
    isModalOpen = useSelector(selectIsOpen),
    error = useSelector(selectError),
    onOpenModal = () => {
      dispatch(openModal());
      document.body.style.overflow = 'hidden';
    },
    getOwnReview = () => {
      dispatch(getOwnReviewThunk()).then((res) => {
        getOwnReviewThunk.fulfilled.match(res)
          ? Notify.success('Your feedback has been successfully received', {
              width: '260px',
              showOnlyTheLastOne: true,
              position: 'right-top',
              timeout: 2000,
              fontSize: '15px',
              borderRadius: '8px',
              cssAnimationStyle: 'from-top',
            })
          : Notify.failure('There is no feedback yet', {
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

  return { review, isLoading, isModalOpen, error, onOpenModal, getOwnReview };
};

export default useGetOwnReview;
