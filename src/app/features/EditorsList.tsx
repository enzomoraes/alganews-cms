import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { User } from '../../sdk/@types';
import UserService from '../../sdk/services/User.service';
import getEditorDescription from '../../sdk/utils/getEditorDescription';
import Profile from '../components/Profile';

export default function EditorsList() {
  const [editors, setEditors] = useState<User.EditorSummary[]>();

  useEffect(() => {
    UserService.getAllEditors().then(setEditors);
  }, []);

  if (!editors) return <EditorsListWrapper>
    <Skeleton width={328} height={82}></Skeleton>
    <Skeleton width={328} height={82}></Skeleton>
    <Skeleton width={328} height={82}></Skeleton>
  </EditorsListWrapper>

  return (
    <EditorsListWrapper>
      {editors.map(editor => {
        return <Profile
          avatar={editor.avatarUrls.small}
          key={editor.id}
          editorId={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
        />;
      })}
    </EditorsListWrapper>
  );
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
