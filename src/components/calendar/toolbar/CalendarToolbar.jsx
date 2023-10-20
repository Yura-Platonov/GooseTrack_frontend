import PeriodPaginator from '../periodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../periodTypeSelect/PeriodTypeSelect';
import { Toolbar } from './CalendarToolbar.styled';

const CalendarToolbar = ({
  selectedDate,
  setSelectedDate,
  typeDay,
  setType,
}) => {
  return (
    <>
      <Toolbar>
        <PeriodPaginator
          selectedDate={selectedDate}
          typeDateDay={typeDay}
          setSelectedDate={setSelectedDate}
        />
        <PeriodTypeSelect typeDateDay={typeDay} setType={setType} />
      </Toolbar>
    </>
  );
};

export default CalendarToolbar;
