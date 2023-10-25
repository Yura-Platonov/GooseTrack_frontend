import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import Modal from '../../Modal/Modal';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';

const AddTaskBtn = ({ title }) => {
  const { onOpenModal } = useGetOwnReview();
  const { checkIsOpen } = useGetOwnReview();
  const isOpen = checkIsOpen('modal2');

  return (
    <>
      <AddBtnContainer
        type="button"
        onClick={() => {
          onOpenModal('modal2');
        }}
      >
        <IconAdd />
        <NameBtn>Add task</NameBtn>
      </AddBtnContainer>
      {isOpen && (
        <Modal>
          <TaskModal status={title} />
        </Modal>
      )}
    </>
  );
};

export default AddTaskBtn;
