import { useEffect, useState } from 'react';
import LegendList from '../components/statistic/legendList/legendList';
import PeriodPaginator from '../components/calendar/periodPaginator/PeriodPaginator';
import { Toolbar } from '../components/calendar/toolbar/CalendarToolbar.styled';
import { Container } from '../components/calendar/CalendarPage.styled';
import StatisticChart from '../components/statistic/StatisticChart';

const StatisticPage = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const [typeDay, setType] = useState(false);

  useEffect(() => {
    setType(true);
  }, []);

  return (
    <Container>
      <Toolbar>
        <PeriodPaginator
          selectedDate={selectedDate}
          typeDateDay={typeDay}
          setSelectedDate={setSelectedDate}
        />
        <LegendList />
      </Toolbar>
      <StatisticChart />
    </Container>
  );
};

export default StatisticPage;
