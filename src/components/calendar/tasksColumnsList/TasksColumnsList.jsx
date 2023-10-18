import React from 'react';
import PropTypes from 'prop-types';
import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './TasksColumnsList.styled';
import { Droppable } from 'react-beautiful-dnd';

export const ColumnsTasksList = ({ status, filteredDayTasks }) => {
  return (
    <>
      <Droppable
        droppableId={`column-${status.name}`}
        key={status.id}
        type="TASK"
        isCombineEnabled={true}
      >
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList>
              {filteredDayTasks &&
                filteredDayTasks.map((task, index) => (
                  <TaskColumnCard task={task} key={task._id} index={index} />
                ))}
              {provided.placeholder}
            </TasksList>
          </div>
        )}
      </Droppable>
    </>
  );
};

ColumnsTasksList.propTypes = {
  status: PropTypes.object,
  filteredDayTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
