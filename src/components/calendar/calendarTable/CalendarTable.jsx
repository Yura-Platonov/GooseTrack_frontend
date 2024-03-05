
import { useSelector } from 'react-redux';
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
import PropTypes from 'prop-types';

import { selectMonthTasks } from '../../../redux/task/selectors';
import { TaskModal } from '../../Modal/TaskModal/TaskModal';
import { default as Modal } from '../../Modal/Modal';
import {
  ContainerGrid,
  ItemWrapper,
  ItemLink,
  ItemDate,
  TasksWrapper,
  ItemTask,
} from './CalendarTable.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview';
import { nanoid } from '@reduxjs/toolkit';

const CalendarTable = ({ selectedDate, setSelectedDate, setType }) => {
  const tasks = useSelector(selectMonthTasks);
  const { checkIsOpen, onOpenModal } = useGetOwnReview();
  const isOpen = checkIsOpen('modal2');
  
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
      {daysInMonth.map((day, id = nanoid()) => {
        return (
          <ItemWrapper key={id}>
            <ItemLink
              to="day/:currentDate"
              key={id}
              onClick={() => {
                setSelectedDate(day);
                setType(true);
              }}
            >
              <ItemDate
                currentMonth={isSameMonth(day, selectedDate) ? true : false}
                currentDay={isSameDay(day, selectedDate) ? true : false}
              >
                {format(day, 'd')}
              </ItemDate>
            </ItemLink>

            <TasksWrapper>
              {tasks.tasks && tasks.tasks.length !== 0 &&
                tasks.tasks.map(({ _id, date, title, priority }) => {
                  if (
                    new Date(date).getFullYear() === day.getFullYear() &&
                    new Date(date).getMonth() === day.getMonth() &&
                    new Date(date).getDate() === day.getDate()
                  )
                    return (
                      <ItemTask
                        key={_id}
                        high={priority === 'high' ? 1 : 0}
                        medium={priority === 'medium' ? 1 : 0}
                       
                      >
                        {title}
                      </ItemTask>
                    );
                })}
            </TasksWrapper>
          </ItemWrapper>
        );
      })}
      {isOpen && (
        <Modal>
          <TaskModal />
        </Modal>
      )}
    </ContainerGrid>
  );
};

export default CalendarTable;

CalendarTable.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};
