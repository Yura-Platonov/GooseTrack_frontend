import { useEffect, useState } from 'react';
import LegendList from '../../components/statistic/LegendList/LegendList';
import PeriodPaginator from '../../components/calendar/periodPaginator/PeriodPaginator';
import { Toolbar } from '../../components/calendar/toolbar/CalendarToolbar.styled';
import { Container, WrapperToolbar } from './StatisticPage.styled';
import StatisticChart from '../../components/statistic/StatisticChart/StatisticChart';

import { useDispatch, useSelector } from 'react-redux';

import { getTasksByMonth } from '../../redux/task/operations';
import { selectMonthTasks } from '../../redux/task/selectors';
import { selectErrorTasks } from '../../redux/task/selectors';

import statisticCalculations from '../../helpers/statisticCalculations';

const StatisticPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [typeDay, setType] = useState(false);
  const error = useSelector(selectErrorTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    setType(true);

    dispatch(getTasksByMonth({ year, month }));
  }, [dispatch, selectedDate]);

  const monthTasks = useSelector(selectMonthTasks, selectedDate);

  let statistics = [];
  if (error === null) {
    statistics = statisticCalculations(monthTasks.tasks, selectedDate);
  }

  return (
    <Container>
      <WrapperToolbar>
        <Toolbar>
          <PeriodPaginator
            selectedDate={selectedDate}
            typeDay={typeDay}
            setSelectedDate={setSelectedDate}
          />
          <LegendList />
        </Toolbar>
      </WrapperToolbar>
      <StatisticChart statistics={statistics} />
    </Container>
  );
};

export default StatisticPage;
