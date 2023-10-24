import { useEffect, useState } from 'react';
import LegendList from '../../components/statistic/LegendList/LegendList';
import PeriodPaginator from '../../components/calendar/periodPaginator/PeriodPaginator';
import { Toolbar } from '../../components/calendar/toolbar/CalendarToolbar.styled';
import { Container } from './StatisticPage.styled';
import StatisticChart from '../../components/statistic/StatisticChart/StatisticChart';

import { useDispatch, useSelector } from 'react-redux';

import { getTasksByMonth } from '../../redux/task/operations';
import { selectMonthTasks } from '../../redux/task/selectors';

import statisticCalculations from '../../helpers/statisticCalculations';

const StatisticPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [typeDay, setType] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;

    dispatch(getTasksByMonth({ year, month }));
    setType(true);
  }, [dispatch, selectedDate]);

  const monthTasks = useSelector(selectMonthTasks, selectedDate);


  const statistics = statisticCalculations(monthTasks.tasks, selectedDate);

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
      <StatisticChart statistics={statistics} />
    </Container>
  );
};

export default StatisticPage;
