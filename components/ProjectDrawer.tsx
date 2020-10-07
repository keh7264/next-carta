import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRightOutlined';
import clsx from 'clsx';
import Link from 'next/link';
import styled from 'styled-components';

const drawerWidth = 318;
const navigationWidth = 64;

const ProjectDrawer = ({ open, setOpen }) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DrawerEx
        className={clsx('drawer', {
          drawerOpen: open,
          drawerClose: !open,
        })}
        classes={{
          paper: clsx('paper', {
            drawerOpen: open,
            drawerClose: !open,
          }),
        }}
        variant="permanent"
        anchor="left"
        open={open}
      >
        <div className="drawerHeader">프로젝트 관리</div>
        <ListEx>
          {['프로젝트 정보', '현장상황', 'GCPs', '도면', '계획고', '지도도구', '기타 파일'].map(
            (text, index) => (
              <ListItem button key={text}>
                <Link href="/">
                  <ListItemText className="listText" primary={text} />
                </Link>
              </ListItem>
            ),
          )}
        </ListEx>
      </DrawerEx>
      <DrawerPull
        className={clsx({
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
      </DrawerPull>
    </>
  );
};

export default ProjectDrawer;

const DrawerEx = styled(Drawer)`
  left: ${navigationWidth}px;
  width: ${drawerWidth}px;
  flex-shrink: 0;
  overflow: hidden;
  /* background-color: #fff; */

  /* ${({ theme }) => `
    transition: ${theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};`} */

  &.drawerOpen,
  .drawerOpen {
    left: ${navigationWidth}px;
    width: ${drawerWidth}px;
  }

  &.drawerClose,
  .drawerClose {
    left: ${navigationWidth - drawerWidth}px;
    overflow-x: hidden;
    width: ${drawerWidth}px;
  }

  .drawerHeader {
    display: flex;
    align-items: center;
    /* ${({ theme }) => `
      padding: ${theme.spacing(0, 1)};
    `} */
    font-weight: bold;
    font-size: 24px;
    padding: 24px 40px;
  }
`;

const DrawerPull = styled.div`
  display: inline-block;
  position: fixed;
  left: ${drawerWidth + navigationWidth}px;
  top: calc(50vh - 32px);
  background-color: #00acc1;
  border-radius: 0px 5px 5px 0px;
  width: 24px;
  height: 64px;
  /* ${({ theme }) => `
    transition: ${theme.transitions.create('left', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};`} */
  &.drawerPullhide {
    left: ${navigationWidth}px;
  }

  > button {
    height: 100%;

    svg {
      color: #fff;
    }
  }
`;

const ListEx = styled(List)`
  .listText {
    padding-left: 35px;
    > span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const ListItemTextEx = styled(ListItemText)`
  font-size: 16px;
  font-weight: bold;
`;
