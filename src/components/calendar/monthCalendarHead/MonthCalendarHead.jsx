import { useId } from 'react';
import PropTypes from 'prop-types';
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import { ContainerDays, ItemDay } from './MonthCalendarHead.styled';

const MonthCalendarHead = ({ selectedDate }) => {
  const isMobileView = window.innerWidth < 768;
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 });
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <>
      <ContainerDays>
        {daysInWeek.map((day, id = useId()) => {
          return (
            <ItemDay key={id}>
              <p>{format(day, isMobileView ? 'eeeee' : 'eee')}</p>{' '}
            </ItemDay>
          );
        })}
      </ContainerDays>
    </>
  );
};

export default MonthCalendarHead;

MonthCalendarHead.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
};
