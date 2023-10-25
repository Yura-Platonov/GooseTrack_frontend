import React from 'react';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './TasksColumnsList.styled';

export const ColumnsTasksList = ({ tasks, getTask, selectedDate }) => {
  return (
    <>
      <TasksList>
        {tasks?.map((task) => {
          if (
            new Date(task.date).getFullYear() === selectedDate.getFullYear() &&
            new Date(task.date).getMonth() === selectedDate.getMonth() &&
            new Date(task.date).getDate() === selectedDate.getDate()
          )
            return (
              <TaskColumnCard
                task={task}
                key={task._id}
                getTask={getTask}
                selectedDate={selectedDate}
              />
            );
        })}
      </TasksList>
    </>
  );
};
