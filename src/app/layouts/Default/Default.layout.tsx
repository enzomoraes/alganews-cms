import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import SessionController from '../../components/SessionController';
import * as DL from './Default.layout.styles';
interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>
        <Logo />
      </DL.Header>
      <DL.Main>
        <DL.Navigation>
          <Navbar />
        </DL.Navigation>
        <DL.FeaturedContent>{props.children}</DL.FeaturedContent>
        <DL.Aside>
          <SessionController
            name='Enzo Moraes'
            description='editor há 2 anos'
          ></SessionController>
        </DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
