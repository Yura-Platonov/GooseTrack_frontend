import PropTypes from 'prop-types';
import MonthCalendarHead from '../monthCalendarHead/MonthCalendarHead';
import CalendarTable from '../calendarTable/CalendarTable';

const ChoosedMonth = ({ setType, selectedDate, setSelectedDate }) => {
  return (
    <>
      <MonthCalendarHead selectedDate={selectedDate} />
      <CalendarTable
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setType={setType}
      />
    </>
  );
};

export default ChoosedMonth;

ChoosedMonth.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};
