import { LineChart } from '@mui/x-charts';
import { useMediaQuery } from '@mui/material';

const years = [
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
  new Date(2023, 0, 1),
];

const FranceGDPperCapita = [
  2150000, 3800000,
  3500000, 5600000,
  4000000, 6100000,
];

const Chart = () => {
  const isMediumScreen = useMediaQuery('(min-width: 600px)');

  const chartWidth = isMediumScreen ? 500 : 540;

  return (
    <LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: 'France',
          data: FranceGDPperCapita,
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      width={chartWidth}
      height={350}
    />
  )
}

export default Chart;
