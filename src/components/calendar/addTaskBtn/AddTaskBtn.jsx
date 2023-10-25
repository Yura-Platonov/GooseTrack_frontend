import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import Modal from '../../Modal/Modal';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { useId } from 'react';

const AddTaskBtn = ({ title }) => {
  const { onOpenModal, checkIsOpen } = useGetOwnReview();
  const openModalId = useId();
  const isOpen = checkIsOpen(openModalId);

  return (
    <>
      <AddBtnContainer
        type="button"
        onClick={() => {
          onOpenModal(openModalId);
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
