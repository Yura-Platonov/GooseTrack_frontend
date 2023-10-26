import DayCalendarHead from '../dayCalendarHead/DayCalendarHead';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import TasksColumn from '../tasksColumn/TasksColumn';
import { ColumnsContainer } from './ChoosedDay.styled';

const ChoosedDay = ({ tasks = [], getTask, selectedDate, setSelectedDate }) => {
  const columnTitles = ['To do', 'In progress', 'Done'];
// console.log(tasks)
 const categorizedTasks = {
   'To do':
     tasks && tasks.length > 0
       ? tasks.filter((task) => task.category === 'to-do')
       : [],
   'In progress':
     tasks && tasks.length > 0
       ? tasks.filter((task) => task.category === 'in-progress')
       : [],
   'Done':
     tasks && tasks.length > 0
       ? tasks.filter((task) => task.category === 'done')
       : [],
 };

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
              key={nanoid()}
              title={columnTitle}
              tasks={categorizedTasks[columnTitle]}
              getTask={getTask}
              selectedDate={selectedDate}
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
