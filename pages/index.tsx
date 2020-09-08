import { Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import ProjectDrawer from '../components/ProjectDrawer';

const drawerWidth = 318;
const navigationWidth = 64;

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

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
}

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
    ${({ theme }) => `
      padding: ${theme.spacing(3)}px;
      transition: ${theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};`}

    &.contentShift {
      margin-left: 0;
      ${({ theme }) => `
      transition: ${theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })};`}
    }
  }
`;

const ContainerEx = styled(Container)`
  margin: auto;
  display: flex;
  /* flex-wrap: wrap; */
`;

const SnapshotCard = styled.div`
  width: 320px;
  flex: 0 0 320px;
  margin: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;
