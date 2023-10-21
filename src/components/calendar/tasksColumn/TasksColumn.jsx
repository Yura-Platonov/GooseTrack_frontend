import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsOpen } from '../../../redux/modal/selectors.js';
import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';
import { useState } from 'react';
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
