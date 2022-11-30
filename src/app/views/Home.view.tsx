import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePageTitle from '../../core/hooks/usePageTitle';
import selectPostsCounter from '../../core/selectors/selectPostsCounter';
import { AppDispatch } from '../../core/store';
import { fetchPosts, increment } from '../../core/store/Post.slice';
import PostsList from '../features/PostsList';
import UserEarnings from '../features/UserEarnings';
import UserPerformance from '../features/UserPerformance';
import UserTopTags from '../features/UserTopTags';
import DefaultLayout from '../layouts/Default';

export default function Home() {
  usePageTitle('Home');
  const dispatch: AppDispatch = useDispatch();
  const counter = useSelector(selectPostsCounter);

  useEffect(() => {
    dispatch(fetchPosts({ page: 0 }));
    dispatch(increment())
  }, [dispatch]);

  return (
    <DefaultLayout>
      {counter}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <UserTopTags />
        <UserEarnings />
      </div>
      <UserPerformance />
      <PostsList />
    </DefaultLayout>
  );
}
