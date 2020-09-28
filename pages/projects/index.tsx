import { Card } from '@material-ui/core';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProjectStore from '../../stores/project';

const Projects = observer((props) => {
  const { projects } = ProjectStore;
  useEffect(() => {
    ProjectStore.list();
  }, []);

  return (
    <>
      {projects.length > 0 &&
        projects.map(({ id, name, construction_date, completed_date, description }) => {
          return (
            <Link key={id} href={`/projects/${id}`}>
              <CardWrapper>
                <p>{`프로젝트 명 :${name}`}</p>
                <p>{`날짜 :${construction_date} ~ ${completed_date}`}</p>
                <p>{`상세설명 :${description}`}</p>
              </CardWrapper>
            </Link>
          );
        })}
    </>
  );
});

export default Projects;

const CardWrapper = styled(Card)`
  max-width: 345px;
`;
