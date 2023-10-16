import MonthCalendarHead from '../monthCalendarHead/MonthCalendarHead';
import CalendarTable from '../calendarTable/CalendarTable';

const ChoosedMonth = ({ selectedDate, setSelectedDate }) => {
  return (
    <>
      <MonthCalendarHead selectedDate={selectedDate} />
      <CalendarTable selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    </>
  );
};

export default ChoosedMonth;
