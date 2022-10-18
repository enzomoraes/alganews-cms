import { transparentize } from 'polished';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { User } from '../../sdk/@types';
import UserService from '../../sdk/services/User.service';
import getEditorDescription from '../../sdk/utils/getEditorDescription';
import FieldDescriptor from '../components/FieldDescriptor/FieldDescriptor';
import Profile from '../components/Profile';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile(props: EditorProfileProps) {
  const params = useParams<{ id: string }>();
  const [editor, setEditor] = useState<User.EditorDetailed>();

  useEffect(() => {
    UserService.getExistingEditor(Number(params.id)).then(setEditor);
  }, [params.id]);

  if (!editor) return null;

  return (
    <Wrapper>
      <Profile
        editorId={editor?.id}
        name={editor.name}
        description={getEditorDescription(new Date(editor.createdAt))}
        avatar={editor.avatarUrls.small}
      />
      <hr style={{ border: `1px solid ${transparentize(0.9, '#274060')}` }} />
      <UserData>
        <PersonalInfo>
          <Biography>{editor.bio}</Biography>
          <Skills>
            {editor.skills?.map(skill => {
              return (
                <ProgressBar
                  progress={skill.percentage}
                  theme='primary'
                  title={skill.name}
                />
              );
            })}
          </Skills>
        </PersonalInfo>
        <ContactInfo>
          <FieldDescriptor label={'Cidade'} value={editor.location.city} />
          <FieldDescriptor label={'Estado'} value={editor.location.state} />
          {!props.hidePersonalData && (
            <>
              <FieldDescriptor label={'Telefone'} value={'+55 27 99900-9999'} />
              <FieldDescriptor
                label={'Email'}
                value={'ana.castillo@redacao.algacontent.com'}
              />
              <FieldDescriptor
                label={'Nascimento'}
                value={'26 de Dezembro de 1997 (22 anos)'}
              />{' '}
            </>
          )}
        </ContactInfo>
      </UserData>
      {!props.hidePersonalData && (
        <EditorEarnings>
          <ValueDescriptor
            color={'default'}
            value={21452}
            description={'Palavras nesta semana'}
          />
          <ValueDescriptor
            color={'default'}
            value={123234}
            description={'Palavras no mês'}
          />
          <ValueDescriptor
            color={'default'}
            value={12312312}
            description={'Total de palavras'}
          />
          <ValueDescriptor
            color={'primary'}
            value={545623.23}
            description={'Ganhos na semana'}
            isCurrency
          />
          <ValueDescriptor
            color={'primary'}
            value={545623.23}
            description={'Ganhos no mês'}
            isCurrency
          />
          <ValueDescriptor
            color={'primary'}
            value={545623.23}
            description={'Ganhos no total'}
            isCurrency
          />
        </EditorEarnings>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;
  > * {
    width: 100%;
  }
  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`;
