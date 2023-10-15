import { useId } from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  addWeeks,
  addDays,
  isSameDay,
} from 'date-fns';
import { ContainerGrid, ItemLink, ItemDate } from './CalendarTable.styled';

const CalendarTable = ({ selectedDate, setSelectedDate }) => {
  const startMonth = startOfMonth(selectedDate);
  const endMonth = endOfMonth(selectedDate);
  const startDay = startOfWeek(startMonth, { weekStartsOn: 1 });
  const endDay = endOfWeek(endMonth, { weekStartsOn: 1 });
  const daysInMonth = eachDayOfInterval({ start: startDay, end: endDay });

  if (daysInMonth.length < 36) {
    const addWeek = addWeeks(endDay, 1);
    daysInMonth.push(
      ...eachDayOfInterval({ start: addDays(endDay, 1), end: addWeek }),
    );
  }

  return (
    <ContainerGrid>
      {daysInMonth.map((day, id = useId()) => {
        return (
          <ItemLink key={id} onClick={() => setSelectedDate(day)}>
            <ItemDate
              currentMonth={isSameMonth(day, selectedDate) ? true : false}
              currentDay={isSameDay(day, selectedDate) ? true : false}
            >
              {format(day, 'd')}
            </ItemDate>
          </ItemLink>
        );
      })}
    </ContainerGrid>
  );
};

export default CalendarTable;
