import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import useUser from '../../core/hooks/useUser';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

function UserEarnings() {
  const { user, fetchUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (!user)
    return (
      <UserEarningsWrapper style={{ height: '123px' }}>
        <Skeleton width={150} height={40}></Skeleton>
        <Skeleton width={150} height={40}></Skeleton>
        <Skeleton width={150} height={40}></Skeleton>
        <Skeleton width={150} height={40}></Skeleton>
      </UserEarningsWrapper>
    );

  return (
    <UserEarningsWrapper>
      <ValueDescriptor
        color='primary'
        description='Ganhos no mês'
        value={user?.metrics.monthlyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color='primary'
        description='Ganhos na semana'
        value={user.metrics.weeklyEarnings}
        isCurrency
      />
      <ValueDescriptor
        color='default'
        description='Ganhos de sempre'
        value={user.metrics.lifetimeEarnings}
        isCurrency
      />
      <ValueDescriptor
        color='default'
        description='Total de palavras'
        value={user.metrics.lifetimeWords}
      />
    </UserEarningsWrapper>
  );
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export default withBoundary(UserEarnings, 'ganhos do usuário');
