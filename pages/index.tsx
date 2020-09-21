import { Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { style } from '@material-ui/system';
import { observer } from 'mobx-react';
import NavigationBar from '../components/NavigationBar';
import ProjectDrawer from '../components/ProjectDrawer';
import UserStore from '../stores/user';

const drawerWidth = 318;
const navigationWidth = 64;

const Home = observer(() => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    UserStore.read({
      email: 'support@carta.is',
      password: 'carta1234!',
    });

    return () => {};
  }, []);

  return (
    <Layout>
      <NavigationBar />
      <Wrapper>
        <ProjectDrawer open={open} setOpen={setOpen} />
        <main
          className={clsx('content', {
            contentShift: open,
          })}
        >
          <div>
            <ContainerEx maxWidth="xl">
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
              <SnapshotCard>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </SnapshotCard>
            </ContainerEx>
          </div>
        </main>
      </Wrapper>
    </Layout>
  );
});

export default Home;

const Layout = styled.div`
  display: flex;
  position: relative;
`;

const Wrapper = styled.div`
  left: ${navigationWidth}px;
  top: 0;
  display: flex;
  flex: 1;

  main.content {
    margin-left: ${-drawerWidth}px;
    flex-grow: 1;
    flex: 1;
    transition: margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
    ${({ theme }) => `padding: ${theme.spacing(3)}px;`};

    &.contentShift {
      margin-left: 0;
      transition: margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }
  }
`;

const ContainerEx = styled(Container)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const SnapshotCard = styled.div`
  width: 320px;
  flex: 0 0 320px;
  margin: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;
