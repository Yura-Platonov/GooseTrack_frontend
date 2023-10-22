import { useDispatch, useSelector } from 'react-redux';
import { addOwnReviewThunk } from '../redux/feedback/operations.js';
import { selectUser } from '../redux/auth/selectors.js';

const useAddOwnReview = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);

  const handleSubmit = (feedback, rating) => {
    dispatch(
      addOwnReviewThunk({
        name: username,
        comment: feedback,
        stars: rating,
      }),
    );
  };

  return { handleSubmit };
};
export default useAddOwnReview;
