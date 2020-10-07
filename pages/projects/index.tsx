import { Card, Container } from '@material-ui/core';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';
import projectStore from '../../stores/project';

const Projects = observer((props) => {
  const { projects, sortProjectList } = projectStore;
  useEffect(() => {
    projectStore.findAll();
  }, []);

  return (
    <ContainerEx>
      {projects?.length > 0 &&
        sortProjectList.map(({ id, name, construction_date, completed_date, description }) => {
          return (
            <Link key={id} href="/projects/[projectId]" as={`/projects/${id}`}>
              <CardWrapper>
                <p>{`프로젝트 명 :${name}`}</p>
                <p>{`날짜 :${construction_date} ~ ${completed_date}`}</p>
                <p>{`상세설명 :${description}`}</p>
              </CardWrapper>
            </Link>
          );
        })}
    </ContainerEx>
  );
});

export default Projects;
const ContainerEx = styled(Container)`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled(Card)`
  max-width: 345px;
  width: 320px;
  flex: 0 0 320px;
  margin: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;
