import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { format, subMonths, addMonths, subDays, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  PeriodContainer,
  PeriodBtnContainer,
  PrevBtn,
  NextBtn,
  IconForward,
  IconBack,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ selectedDate, typeDay, setSelectedDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, typeDay === true ? 'd MMM yyyy' : 'MMMM yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <PeriodContainer>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substring(0, 1)}
      />
      <CalendarGlobalStyles />

      <PeriodBtnContainer>
        <PrevBtn
          onClick={() => {
            const result =
              typeDay === true
                ? subDays(selectedDate, 1)
                : subMonths(selectedDate, 1);
            setSelectedDate(result);
          }}
        >
          <IconBack size={16} />
        </PrevBtn>
        <NextBtn
          onClick={() => {
            const result =
              typeDay === true
                ? addDays(selectedDate, 1)
                : addMonths(selectedDate, 1);
            setSelectedDate(result);
          }}
        >
          <IconForward size={16} />
        </NextBtn>
      </PeriodBtnContainer>
    </PeriodContainer>
  );
};

export default PeriodPaginator;

PeriodPaginator.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  typeDay: PropTypes.bool,
};
