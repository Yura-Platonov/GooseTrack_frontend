import { useId } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from 'date-fns';
import {
  ContainerDays,
  ItemDay,
  ItemDayName,
  ItemDayNum,
} from './DayCalendarHead.styled';

const DayCalendarHead = ({ selectedDate, setSelectedDate }) => {
  const isMobileView = window.innerWidth < 768;
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: 1 });
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <>
      <ContainerDays>
        {daysInWeek.map((day, id = useId()) => {
          return (
            <ItemDay key={id} onClick={() => setSelectedDate(day)}>
              <ItemDayName>
                {format(day, isMobileView ? 'eeeee' : 'eee')}
              </ItemDayName>
              <ItemDayNum
                currentDay={isSameDay(day, selectedDate) ? true : false}
              >
                {format(day, 'd')}
              </ItemDayNum>
            </ItemDay>
          );
        })}
      </ContainerDays>
    </>
  );
};

export default DayCalendarHead;

DayCalendarHead.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
};
