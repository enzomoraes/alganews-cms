import { transparentize } from 'polished';
import styled from 'styled-components';
import FieldDescriptor from '../components/FieldDescriptor/FieldDescriptor';
import Profile from '../components/Profile';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

export default function EditorProfile(props: EditorProfileProps) {
  // throw new Error('Houve um erro ao renderizar o componente EditorProfile')
  return (
    <Wrapper>
      <Profile
        editorId={1}
        name='Enzo Moraes Pereira'
        description='Editor há 5 anos'
      />
      <hr style={{ border: `1px solid ${transparentize(0.9, '#274060')}` }} />
      <UserData>
        <PersonalInfo>
          <Biography>
            Ana Castillo é especialista em recrutamento de desenvolvedores e ama
            escrever dicas para ajudar os devs a encontrarem a vaga certa para
            elas. Atualmente tem uma empresa de Recruitment e é redatora no alga
            content
          </Biography>
          <Skills>
            <ProgressBar
              progress={95}
              theme='primary'
              title='tech recruiting'
            />
            <ProgressBar progress={75} theme='primary' title='coaching' />
            <ProgressBar progress={44} theme='primary' title='java' />
          </Skills>
        </PersonalInfo>
        <ContactInfo>
          <FieldDescriptor label={'Cidade'} value={'Vila Velha'} />
          <FieldDescriptor label={'Estado'} value={'Espírito Santo'} />
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
