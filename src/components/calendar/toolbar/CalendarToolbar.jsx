import PropTypes from 'prop-types';
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
          typeDay={typeDay}
          setSelectedDate={setSelectedDate}
        />
        <PeriodTypeSelect typeDay={typeDay} setType={setType} />
      </Toolbar>
    </>
  );
};

export default CalendarToolbar;

CalendarToolbar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  typeDay: PropTypes.bool.isRequired,
  setType: PropTypes.func.isRequired,
};
