import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../components/calendar/CalendarPage.styled';
import CalendarToolbar from '../components/calendar/toolbar/CalendarToolbar';
import ChoosedMonth from '../components/calendar/choosedMonth/ChoosedMonth';
import ChoosedDay from '../components/calendar/choosedDay/ChoosedDay';

const CalendarPage = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [typeDay, setType] = useState(false);

  const navigate = useNavigate();
  const { currentDate } = useParams();

  useEffect(() => {
    //if (today !== currentDate) setSelectedDate(currentDate);
    if (!typeDay) {
      navigate(
        `/calendar/month/${selectedDate.getTime().toString().slice(0, -5)}`,
      );
    } else if (typeDay) {
      navigate(
        `/calendar/day/${selectedDate.getTime().toString().slice(0, -5)}`,
      );
    }
  }, [selectedDate, typeDay, navigate]);

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
