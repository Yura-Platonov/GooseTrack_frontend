import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../components/calendar/CalendarPage.styled';
import CalendarToolbar from '../components/calendar/toolbar/CalendarToolbar';
import ChoosedMonth from '../components/calendar/choosedMonth/ChoosedMonth';
import ChoosedDay from '../components/calendar/choosedDay/ChoosedDay';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { selectMonthTasks } from '../redux/task/selectors';
import { getTasksByMonth } from '../redux/task/operations';

const CalendarPage = () => {
  const today = new Date(); //Сьогоднішня дата
  const [selectedDate, setSelectedDate] = useState(today); //Обрана дата
  let selectedMonth = selectedDate.getMonth() + 1; //Місяць обраної дати
  let selectedYear = selectedDate.getFullYear(); //Рік обраної дати
  const [typeDay, setType] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(selectMonthTasks);
  const { currentDate } = useParams();

  //console.log(selectedDate);
  //console.log(selectedMonth);
  // const date = new Date(Number(currentDate));

  console.log(tasks);

  useEffect(() => {
    if (!typeDay) {
      navigate(`/calendar/month/${selectedDate.getTime()}`);
    } else if (typeDay) {
      navigate(`/calendar/day/${selectedDate.getTime()}`);
    }

    //Запит на таски, поки що так
    if (tasks.length === 0 || today.getMonth() + 1 !== selectedMonth) {
      dispatch(getTasksByMonth({ year: selectedYear, month: selectedMonth }));
    } else if (tasks.length !== 0 && today.getMonth() + 1 === selectedMonth) {
      dispatch(getTasksByMonth({ year: selectedYear, month: selectedMonth }));
    } else if (
      tasks.length !== 0 &&
      new Date(tasks.tasks[0].date).getMonth() + 1 === selectedMonth
    ) {
      return;
    }
  }, [selectedDate]);

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
        />
      )}
    </Container>
  );
};

export default CalendarPage;
