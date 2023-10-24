import BarChartStatistic from '../BarChartStatistic/BarChartStatistic';
import { Text } from './StatisticChart.styled';

function StatisticChart({ statistics }) {
  return (
    <div>
      <Text>Tasks</Text>
      <BarChartStatistic statistics={statistics} />
    </div>
  );
}

export default StatisticChart;
