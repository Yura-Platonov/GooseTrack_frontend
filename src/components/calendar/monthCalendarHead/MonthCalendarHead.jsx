import { useId } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { ContainerDays, ItemDay } from './MonthCalendarHead.styled';

const MonthCalendarHead = ({ selectedDate }) => {
  const isMobileView = window.innerWidth < 768;
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = [];

  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <ItemDay key={useId()}>
        {format(addDays(weekStart, day), isMobileView ? 'eeeee' : 'eee')}
      </ItemDay>,
    );
  }

  return <ContainerDays>{weekDays}</ContainerDays>;
};

export default MonthCalendarHead;
