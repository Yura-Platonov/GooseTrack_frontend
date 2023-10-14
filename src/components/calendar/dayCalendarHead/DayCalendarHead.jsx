import { useId } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { ContainerDays, ItemDay } from './DayCalendarHead.styled';

const DayCalendarHead = ({ selectedDate }) => {
  const isMobileView = window.innerWidth < 768;
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDays = [];

  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <ItemDay key={useId()}>
        <p>{format(addDays(weekStart, day), isMobileView ? 'eeeee' : 'eee')}</p>
        <p>{format(addDays(weekStart, day), 'e')}</p>
      </ItemDay>,
    );
  }

  return <ContainerDays>{weekDays}</ContainerDays>;
};

export default DayCalendarHead;
