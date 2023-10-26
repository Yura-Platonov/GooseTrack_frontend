import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/calendar/CalendarPage.styled';
import CalendarToolbar from '../components/calendar/toolbar/CalendarToolbar';
import ChoosedMonth from '../components/calendar/choosedMonth/ChoosedMonth';
import ChoosedDay from '../components/calendar/choosedDay/ChoosedDay';
import { useSelector, useDispatch } from 'react-redux';
import { selectMonthTasks } from '../redux/task/selectors';
import { getTasksByMonth } from '../redux/task/operations';

const CalendarPage = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  let selectedMonth = selectedDate.getMonth() + 1;
  let selectedYear = selectedDate.getFullYear();
  const [typeDay, setType] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasks } = useSelector(selectMonthTasks);
  useEffect(() => {
    if (!typeDay) {
      navigate(`/calendar/month/${selectedDate.getTime()}`);
    } else if (typeDay) {
      navigate(`/calendar/day/${selectedDate.getTime()}`);
    }

    if (
      tasks &&
      tasks.length !== 0 &&
      new Date(tasks[0].date).getMonth() + 1 === selectedMonth
    ) {
      return;
    }
    dispatch(getTasksByMonth({ year: selectedYear, month: selectedMonth }));
  }, [dispatch, selectedDate, typeDay, tasks]);

  return (
    <Container>
      <CalendarToolbar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        typeDay={typeDay}
        setType={setType}
      />

      {!typeDay ? (
        <ChoosedMonth
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setType={setType}
        />
      ) : (
        <ChoosedDay
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          tasks={tasks}
        />
      )}
    </Container>
  );
};

export default CalendarPage;
