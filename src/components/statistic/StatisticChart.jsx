import BarChartStatistic from './BarChartStatistic/BarChartStatistic';
import { Text } from './StatisticChart.styled';

function StatisticChart() {
  return (
    <div>
      <Text>Tasks</Text>
      <BarChartStatistic />
    </div>
  );
}

export default StatisticChart;
