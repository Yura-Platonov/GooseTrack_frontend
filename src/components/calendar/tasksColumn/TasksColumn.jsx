import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { default as Modal } from '../../Modal/Modal';
import { ColumnsTasksList } from '../tasksColumnsList/TasksColumnsList.jsx';
import useGetOwnReview from '../../../hooks/useGetOwnReview';

const TasksColumn = ({ tasks = [], title, selectedDate }) => {
  return (
    <>
      <ColumnContainer>
        <ColumnHeadBar selectedDate={selectedDate} title={title} />
        <ColumnsTasksList
          selectedDate={selectedDate}
          tasks={tasks}
          title={title}
        />
        <AddTaskBtn selectedDate={selectedDate} title={title} />
      </ColumnContainer>
    </>
  );
};

export default TasksColumn;

TasksColumn.propTypes = {
  // tasks: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     _id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //     start: PropTypes.string.isRequired,
  //     end: PropTypes.string.isRequired,
  //     priority: PropTypes.string.isRequired,
  //     date: PropTypes.string.isRequired,
  //     category: PropTypes.string.isRequired,
  //     owner: PropTypes.string.isRequired,
  //   }).isRequired,
  // ),
  title: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
};
