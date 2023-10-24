import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';

const AddTaskBtn = () => {
  const { onOpenModal } = useGetOwnReview();

  return (
    <AddBtnContainer
      type="button"
      onClick={() => {
        onOpenModal('modal2');
      }}
    >
      <IconAdd />
      <NameBtn>Add task</NameBtn>
    </AddBtnContainer>
  );
};

export default AddTaskBtn;
