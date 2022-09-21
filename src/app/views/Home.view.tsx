import usePageTitle from '../../core/hooks/usePageTitle';
import Chart from '../components/Chart/Chart';
import Table from '../components/Table/Table';
import PostsList from '../features/PostsList';
import UserMetrics from '../features/UserMetrics';
import DefaultLayout from '../layouts/Default';

export default function Home() {
  usePageTitle('Home');

  return (
    <DefaultLayout>
      <UserMetrics />
      <PostsList />
    </DefaultLayout>
  );
}
