import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Post } from 'enzomoraes-alganews-sdk';
import { useEffect, useMemo, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Column, usePagination, useTable } from 'react-table';
import withBoundary from '../../core/hoc/withBoundary';
import usePosts from '../../core/hooks/usePosts';
import modal from '../../core/utils/modal';
import Loading from '../components/Loading';
import PostTitleAnchor from '../components/PostTitleAnchor';
import Table from '../components/Table/Table';
import PostPreview from './PostPreview';

function PostList() {
  const [page, setPage] = useState(0);
  const { paginatedPosts, loading, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts({
      page,
      size: 4,
      showAll: 1,
      sort: ['createdAt', 'desc'],
    });
  }, [fetchPosts, page]);

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: () => (
          <div style={{ paddingLeft: 8, width: '16px' }}>
            <Icon path={mdiOpenInNew} size={'16px'} color={'#09f'} />
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: 'left' }}>Título</div>,
        accessor: 'title',
        width: 320,
        Cell: props => (
          <div
            style={{
              textAlign: 'left',
              display: 'flex',
              gap: 8,
              alignItems: 'center',
              maxWidth: 270,
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleAnchor
              title={props.value}
              href={`/posts/${props.row.original.editor.id}`}
              onClick={e => {
                e.preventDefault();
                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.row.original.title}
            </PostTitleAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Criação</div>,
        accessor: 'createdAt',
        Cell: props => (
          <div
            style={{
              textAlign: 'right',
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {format(parseISO(props.value), 'dd/MM/yyyy')}
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right' }}>Ações</div>,
        Cell: props => (
          <div style={{ textAlign: 'right' }}>
            {props.value ? 'Publicado' : 'Privado'}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>(
    {
      data: paginatedPosts?.content || [],
      columns,
      manualPagination: true,
      initialState: { pageIndex: 0 },
      pageCount: paginatedPosts?.totalPages,
    },
    usePagination
  );

  if (!paginatedPosts)
    return (
      <div>
        <Skeleton height={32}></Skeleton>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
      </div>
    );

  return (
    <>
      <Loading show={loading} />
      <Table instance={instance} onPaginate={setPage} />
    </>
  );
}

export default withBoundary(PostList, 'lista de posts');
