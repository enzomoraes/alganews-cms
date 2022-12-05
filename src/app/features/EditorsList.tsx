import {
  getEditorDescription
} from 'enzomoraes-alganews-sdk';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import useEditors from '../../core/hooks/useEditors';
import Profile from '../components/Profile';

export default function EditorsList() {
  const { editorsList, loading, fetchAllEditors } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length)
    return (
      <EditorsListWrapper>
        <Skeleton width={328} height={82}></Skeleton>
        <Skeleton width={328} height={82}></Skeleton>
        <Skeleton width={328} height={82}></Skeleton>
      </EditorsListWrapper>
    );

  return (
    <EditorsListWrapper>
      {editorsList.map(editor => {
        return (
          <Profile
            avatar={editor.avatarUrls.small}
            key={editor.id}
            editorId={editor.id}
            name={editor.name}
            description={getEditorDescription(new Date(editor.createdAt))}
          />
        );
      })}
      {loading ? 'Buscando mais informações' : null}
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
