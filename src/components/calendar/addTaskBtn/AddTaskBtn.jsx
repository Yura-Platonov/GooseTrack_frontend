import {AddBtnDelimiter, AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import Modal from '../../Modal/Modal';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { useId } from 'react';

const AddTaskBtn = ({ title }) => {

  const { onOpenModal,checkIsOpen } = useGetOwnReview();
  const openMoalId = useId()
  const isOpen = checkIsOpen(openMoalId);
  

  return (
    <>
    <AddBtnDelimiter></AddBtnDelimiter>
      <AddBtnContainer
        type="button"
        onClick={() => {

          onOpenModal(openMoalId);

        }}
      >
        <IconAdd />
        <NameBtn>Add task</NameBtn>
      </AddBtnContainer>
      {isOpen && (
        <Modal>
          <TaskModal status={title} openMoalId={openMoalId} />
        </Modal>
      )}
    </>
  );
};

export default AddTaskBtn;
