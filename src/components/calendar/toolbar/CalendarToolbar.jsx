import { useState } from 'react';
import PeriodPaginator from '../periodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../periodTypeSelect/PeriodTypeSelect';
import ChoosedMonth from '../choosedMonth/ChoosedMonth';
import ChoosedDay from '../choosedDay/ChoosedDay';
import { Toolbar } from './CalendarToolbar.styled';

const CalendarToolbar = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [typeDay, setType] = useState(false); //компонент отримує тип періоду? 

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

      {!typeDay ? (
        <ChoosedMonth
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : (
        <ChoosedDay
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </>
  );
};

export default CalendarToolbar;
