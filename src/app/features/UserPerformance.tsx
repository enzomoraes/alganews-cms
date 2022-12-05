import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import withBoundary from '../../core/hoc/withBoundary';
import usePerformance from '../../core/hooks/usePerformance';
import Chart from '../components/Chart/Chart';

function UserPerformance() {
  const { performance, fetchPerformance } = usePerformance();

  useEffect(() => {
    fetchPerformance();
  }, [fetchPerformance]);

  if (!performance)
    return (
      <div>
        <Skeleton height={227}></Skeleton>
      </div>
    );

  return (
    <Chart
      title='Média de performance nos últimos 12 meses'
      data={performance}
    ></Chart>
  );
}

export default withBoundary(UserPerformance, 'performance');
