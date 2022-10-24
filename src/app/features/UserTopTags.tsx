import { useEffect, useState } from 'react';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import { Metric } from '../../sdk/@types';
import MetricService from '../../sdk/services/Metric.service';
import CircleChart from '../components/CircleChart';

function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTopTags)
      .catch(error => setError(new Error(error.message)));
  }, []);

  if (error) throw error;

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

export default withBoundary(UserTopTags, 'top tags')