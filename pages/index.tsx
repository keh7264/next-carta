import { Button, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRightOutlined';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const drawerWidth = 318;
const navigationWidth = 64;

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="navigation-bar">
        <Button />
      </div>
      <Wrapper>
        <CssBaseline />
        <DrawerEx
          className={clsx('drawer', {
            drawerOpen: open,
            drawerClose: !open,
          })}
          classes={{
            paper: clsx({
              drawerOpen: open,
              drawerClose: !open,
            }),
          }}
          variant="permanent"
          anchor="left"
          open={open}
        >
          <div className="drawerHeader">
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <Link href="/">
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </DrawerEx>
        <div
          className={clsx('drawerPull', {
            drawerPullhide: !open,
          })}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            className={clsx('menuButton')}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
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

  .navigation-bar {
    height: 100vh;
    width: 64px;
    background-color: #111;
    z-index: 1300;
  }
`;

const Wrapper = styled.div`
  left: ${navigationWidth}px;
  top: 0;
  display: flex;
  flex: 1;

  .drawerHeader {
    display: flex;
    align-items: center;
    ${({ theme }) => `
      padding: ${theme.spacing(0, 1)};
    `}
    justify-content: flex-end;
  }

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

  .drawerPull {
    display: inline-block;
    position: fixed;
    left: ${drawerWidth + navigationWidth}px;
    top: 45vh;
    background-color: rgb(255, 255, 255);
    ${({ theme }) => `
    transition: ${theme.transitions.create('left', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};`}

    &.drawerPullhide {
      left: ${navigationWidth}px;
    }
  }
`;

const DrawerEx = styled(Drawer)`
  left: ${navigationWidth}px;
  width: ${drawerWidth}px;
  flex-shrink: 0;
  overflow: hidden;
  ${({ theme }) => `
    transition: ${theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};`}

  .drawerOpen {
    left: ${navigationWidth}px;
    width: ${drawerWidth}px;
  }

  .drawerClose {
    left: ${navigationWidth - drawerWidth}px;
    overflow-x: hidden;
    width: ${drawerWidth}px;
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
