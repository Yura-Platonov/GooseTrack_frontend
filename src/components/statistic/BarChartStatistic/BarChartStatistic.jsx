import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { StyledBarChart } from './BarChartStatistic.styled';

const data = [
  {
    name: 'To Do',
    byDay: 100,
    byMonth: 35,
  },
  {
    name: 'In Progress',
    byDay: 15,
    byMonth: 55,
  },
  {
    name: 'Done',
    byDay: 40,
    byMonth: 85,
  },
];

function BarChartStatistic() {
  return (
    <>
      <StyledBarChart>
        <ResponsiveContainer width="100%" height={413}>
          <BarChart
            barGap={8}
            width={300}
            height={266}
            data={data}
            margin={{
              top: 30,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barSize={22}
          >
            <CartesianGrid stroke="var(--user-panel-active)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip />

            <defs>
              <linearGradient
                id="colorByDay"
                x1="11.4074"
                y1="98"
                x2="11.4074"
                y2="3.56244e-08"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--pink)" />
                <stop
                  offset="0.96875"
                  stopColor="var(--pink)"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="colorByMonth"
                x1="11.4074"
                y1="246"
                x2="11.4074"
                y2="8.94245e-08"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--blue)" />
                <stop offset="1" stopColor="var(--blue)" stopOpacity="0" />
              </linearGradient>
            </defs>

            <Bar
              dataKey="byDay"
              fill="url(#colorByDay)"
              radius={[6, 6, 6, 6]}
              label={{
                position: 'top',
                formatter: (value) => {
                  return value + '%';
                },
              }}
            ></Bar>
            <Bar
              dataKey="byMonth"
              fill="url(#colorByMonth)"
              radius={[6, 6, 6, 6]}
              label={{
                position: 'top',
                formatter: (value) => {
                  return value + '%';
                },
              }}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </StyledBarChart>
    </>
  );
}
export default BarChartStatistic;
