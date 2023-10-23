import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsOpen } from '../../../redux/modal/selectors.js';
import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { default as Modal } from '../../Modal/Modal';
import { ColumnsTasksList } from '../tasksColumnsList/TasksColumnsList';

const TasksColumn = ({ tasks, title, selectedDate }) => {
  const isOpen = useSelector(selectIsOpen);

  return (
    <>
      <ColumnContainer>
        <ColumnHeadBar title={title} />
        <ColumnsTasksList
          selectedDate={selectedDate}
          tasks={tasks}
          title={title}
        />
        <AddTaskBtn title={title} />
      </ColumnContainer>
      {isOpen && (
        <Modal>
          <TaskModal />
        </Modal>
      )}
    </>
  );
};

export default TasksColumn;

TasksColumn.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    }).isRequired,
  ),
  title: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
};
