import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';
import { useState } from 'react';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { default as Modal } from '../../Modal/Modal';

const TasksColumn = ({ title, collection }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ColumnContainer>
        <ColumnHeadBar title={title} handleShowModal={handleShowModal} />

        <AddTaskBtn onClick={handleShowModal} />
      </ColumnContainer>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <TaskModal onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default TasksColumn;
