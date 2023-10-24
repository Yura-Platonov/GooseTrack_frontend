import { useDispatch, useSelector } from 'react-redux';
import { getOwnReviewThunk } from '../redux/feedback/operations.js';
// import { openModal, setIsOpen } from '../redux/modal/modalSlice.js';
import { setIsOpen } from '../redux/modal/modalSlice.js';
import { selectReviews } from '../redux/feedback/selectors.js';
import { selectIsLoading } from '../redux/feedback/selectors.js';
// import { selectIsOpen } from '../redux/modal/selectors.js';
import { selectError } from '../redux/feedback/selectors.js';
import { Notify } from 'notiflix';

import { modalIsOpenSelector } from '../redux/modal/selectors.js';

const useGetOwnReview = () => {
  const dispatch = useDispatch(),
    review = useSelector(selectReviews),
    isLoading = useSelector(selectIsLoading),
    error = useSelector(selectError),
    // isModalOpen = useSelector(selectIsOpen),
    // onOpenModal = () => {
    //   dispatch(openModal());
    //   document.body.style.overflow = 'hidden';
    // },

    // toggleIsOpen = (modalId) => {
    //   dispatch(
    //     setIsOpen({
    //       id: modalId,
    //       isOpen: true,
    //     }),
    //   );
    // },
    checkIsOpen = (modalId) => {
      return useSelector((state) => modalIsOpenSelector(state, modalId));
    },
    onOpenModal = (modalId) => {
      dispatch(
        setIsOpen({
          id: modalId,
          isOpen: true,
        }),
      );
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

  return {
    review,
    isLoading,
    error,
    onOpenModal,
    getOwnReview,
    checkIsOpen,
  };
  // return {
  //   review,
  //   isLoading,
  //   isModalOpen,
  //   error,
  //   onOpenModal,
  //   getOwnReview,
  // };
};

export default useGetOwnReview;
