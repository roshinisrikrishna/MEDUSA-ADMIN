import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function CustomLineChart({ series1, series2 }) {
  return (
    <LineChart
      xAxis={[{ data: series1 }]}
      series={[
        {
          data: series2,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
