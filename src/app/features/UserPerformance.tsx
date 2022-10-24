import { useEffect, useState } from 'react';
import transformEditorMonthlyEaningsIntoChartJs from '../../core/utils/transformEditorMonthlyEarningsIntoChartJs';
import MetricService from '../../sdk/services/Metric.service';
import Chart, { ChartProps } from '../components/Chart/Chart';

export default function UserPerformance() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setEditorEarnings);
  }, []);

  if (!editorEarnings) return null;

  return (
    <Chart
      title='Média de performance nos últimos 12 meses'
      data={editorEarnings}
    ></Chart>
  );
}
