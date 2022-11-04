import { useParams } from 'react-router-dom';
import usePageTitle from '../../core/hooks/usePageTitle';
import PostForm from '../features/PostForm';
import DefaultLayout from '../layouts/Default/Default.layout';

export default function PostEditView() {
  const params = useParams<{ id: string }>()
  usePageTitle('Novo post')
  
  return (
    <DefaultLayout>
      <PostForm postId={Number(params.id)}/>
    </DefaultLayout>
  );
}
