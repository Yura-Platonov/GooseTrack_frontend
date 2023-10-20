import React from 'react';

import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './TasksColumnsList.styled';

export const ColumnsTasksList = ({ tasks, title, selectedDate }) => {
  return (
    <>
      <TasksList title={title}>
        {tasks &&
          tasks.map((task) =>
            task.data.map((task) => (
              <TaskColumnCard
                selectedDate={selectedDate}
                key={task.createdAt}
                description={task.title}
                avatarUrl={task.owner.avatarURL}
                id={task._id}
                date={task.date}
                category={task.category}
                priority={task.priority}
                start={task.start}
                end={task.end}
              />
            )),
          )}
      </TasksList>
    </>
  );
};
