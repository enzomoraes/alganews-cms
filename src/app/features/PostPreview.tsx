import { useEffect } from 'react';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import useSinglePost from '../../core/hooks/useSinglePost';
import confirm from '../../core/utils/confirm';
import modal from '../../core/utils/modal';
import Button from '../components/Button/Button';
import Loading from '../components/Loading';
import MarkdownEditor from '../components/MarkdownEditor';

interface PostPreviewProps {
  postId: number;
}

function PostPreview(props: PostPreviewProps) {
  const { post, fetchPost, loading, publishPost } = useSinglePost();

  function reopenModal() {
    modal({ children: <PostPreview postId={props.postId} /> });
  }

  useEffect(() => {
    fetchPost(props.postId);
  }, [fetchPost, props.postId]);

  if (loading) return <Loading show />;
  if (!post) return null;

  return (
    <Wrapper>
      <PostPreviewHeading>
        <PostPreviewTitle>{post.title}</PostPreviewTitle>
        <PostPreviewActions>
          <Button
            variant={'danger'}
            label={'Publicar'}
            disabled={post.published}
            onClick={() => {
              confirm({
                title: 'Publicar o post?',
                onConfirm: () => publishPost(props.postId),
                onCancel: reopenModal,
              });
            }}
          />
          <Button
            variant={'primary'}
            label={'Editar'}
            disabled={post.published}
            onClick={() => {
              window.location.pathname = `/posts/editar/${props.postId}`;
            }}
          />
        </PostPreviewActions>
      </PostPreviewHeading>
      <PostPreviewImage src={post.imageUrls.medium} />
      <MarkdownEditor readOnly={true} value={post.body} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 655px;
  background-color: #f3f8fa;
  border: 1px solid #ccc;
  padding: 24px;

  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
`;

const PostPreviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostPreviewTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const PostPreviewActions = styled.div`
  display: flex;
  gap: 8px;
`;

const PostPreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`;

export default withBoundary(PostPreview, 'preview do post');
