import { useDispatch } from 'react-redux';
import { deleteOwnReviewThunk } from '../redux/feedback/operations.js';
import { setIsOpen } from '../redux/modal/modalSlice.js';
// import { closeModal } from '../redux/modal/modalSlice.js';
import { Notify } from 'notiflix';

const useDeleteOwnReview = () => {
  const dispatch = useDispatch(),
    onCloseModal = (modalId) => {
      dispatch(
        setIsOpen({
          id: modalId,
          isOpen: false,
        }),
      );
      document.body.style.overflow = 'auto';
    },
    deleteOwnReview = () => {
      dispatch(deleteOwnReviewThunk()).then((res) => {
        deleteOwnReviewThunk.fulfilled.match(res)
          ? Notify.success('Your feedback has been successfully deleted', {
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

  return { deleteOwnReview, onCloseModal };
};

export default useDeleteOwnReview;
