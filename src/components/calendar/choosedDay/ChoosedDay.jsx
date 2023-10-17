import { useId } from 'react';
import DayCalendarHead from '../dayCalendarHead/DayCalendarHead';
import TasksColumn from '../tasksColumn/TasksColumn';
import { ColumnsContainer } from './ChoosedDay.styled';

const ChoosedDay = ({ selectedDate, setSelectedDate }) => {
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
              collection={''}
            ></TasksColumn>
          );
        })}
      </ColumnsContainer>
    </>
  );
};

export default ChoosedDay;
