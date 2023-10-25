import BarChartStatistic from '../BarChartStatistic/BarChartStatistic';
import { Text, Wrapper } from './StatisticChart.styled';

function StatisticChart({ statistics }) {
  return (
    <Wrapper>
      <Text>Tasks</Text>
      <BarChartStatistic statistics={statistics} />
    </Wrapper>
  );
}

export default StatisticChart;
