import React from 'react';
import PropTypes from 'prop-types';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './TasksColumnsList.styled';

export const ColumnsTasksList = ({ status, filteredDayTasks }) => {
  return (
    <>
      <TasksList>
        {filteredDayTasks &&
          filteredDayTasks.map((task, index) => (
            <TaskColumnCard task={task} key={task._id} index={index} />
          ))}
      </TasksList>
    </>
  );
};
