import DayCalendarHead from '../dayCalendarHead/DayCalendarHead';
import { ColumnsContainer } from './ChoosedDay.styled';
import TasksColumn from '../tasksColumn/TasksColumn';

import { useId } from 'react';
import PropTypes from 'prop-types';

const ChoosedDay = ({ tasks = [], getTask, selectedDate, setSelectedDate }) => {
  const columnTitles = ['To do', 'In progress', 'Done'];

  return (
    <>
      <DayCalendarHead
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ColumnsContainer>
        {columnTitles.map((columnTitle) => {
          return (
            <TasksColumn
              key={useId()}
              title={columnTitle}
              tasks={tasks}
              getTask={getTask}
            ></TasksColumn>
          );
        })}
      </ColumnsContainer>
    </>
  );
};

export default ChoosedDay;

ChoosedDay.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
};
