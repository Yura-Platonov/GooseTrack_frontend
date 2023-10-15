import { forwardRef } from 'react';
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
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ selectedDate, typeDateDay, setSelectedDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(
          selectedDate,
          typeDateDay === true ? 'd MMM yyyy' : 'MMMM yyyy',
        )}
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
              typeDateDay === true
                ? subDays(selectedDate, 1)
                : subMonths(selectedDate, 1);
            setSelectedDate(result);
          }}
        >
          🢤
        </PrevBtn>
        <NextBtn
          onClick={() => {
            const result =
              typeDateDay === true
                ? addDays(selectedDate, 1)
                : addMonths(selectedDate, 1);
            setSelectedDate(result);
          }}
        >
          🢧
        </NextBtn>
      </PeriodBtnContainer>
    </PeriodContainer>
  );
};

export default PeriodPaginator;
