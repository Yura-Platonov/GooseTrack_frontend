import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';

const StyledDatepicker = ({formatDate}) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'MMMM yyyy')} 
        {/* 'd MMM yyyy' - передать через проп формат даты*/}
      </TitleWrapper>
    );
  });

  return (
    <>
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
    </>
  );
};

export default StyledDatepicker;
