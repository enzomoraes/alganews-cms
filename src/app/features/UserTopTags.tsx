import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import useTopTags from '../../core/hooks/useTopTags';
import CircleChart from '../components/CircleChart';

function UserTopTags() {
  const { topTags, fetchTopTags } = useTopTags();

  useEffect(() => {
    fetchTopTags();
  }, [fetchTopTags]);

  if (topTags?.length)
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} circle={true}></Skeleton>
        <Skeleton height={88} circle={true}></Skeleton>
        <Skeleton height={88} circle={true}></Skeleton>
      </UserTopTagsWrapper>
    );

  return (
    <UserTopTagsWrapper>
      {topTags?.map((tag, index) => {
        return (
          <CircleChart
            key={index}
            progress={tag.percentage}
            size={88}
            caption={tag.tagName}
            theme={index === 0 ? 'primary' : 'default'}
          />
        );
      })}
    </UserTopTagsWrapper>
  );
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export default withBoundary(UserTopTags, 'top tags');
