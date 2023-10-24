import React from 'react';
import { useEffect, useState } from 'react';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './TasksColumnsList.styled';

export const ColumnsTasksList = ({tasks, getTask, selectedDate }) => {

  return (
    <>
      <TasksList>
        {tasks?.map((task) => (
          <TaskColumnCard
            task={task}
            key={task._id}
            getTask={getTask}
            selectedDate={selectedDate}
          />
        ))}
      </TasksList>
    </>
  );
};
