import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';

import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';
import { useState } from 'react';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { default as Modal } from '../../Modal/Modal';
import { ColumnsTasksList } from '../tasksColumnsList/TasksColumnsList';

const TasksColumn = ({ tasks, title, selectedDate }) => {
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
        <ColumnsTasksList
          selectedDate={selectedDate}
          tasks={tasks}
          title={title}
        />
        <AddTaskBtn onClick={handleShowModal} title={title} />
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
