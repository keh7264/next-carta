import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProjectStore from '../../../stores/project';

const Project = observer(() => {
  const router = useRouter();
  const { projectId } = router.query;
  const { project } = ProjectStore;

  useEffect(() => {
    if (projectId) {
      ProjectStore.read(projectId);
    }
  }, [projectId]);

  if (!project) {
    return <div>project is Empty</div>;
  }

  const { completed_date, construction_date, coordinate, description, name } = project;

  return (
    <div>
      <p>{`프로젝트 명 :${name}`}</p>
      <p>{`날짜 :${construction_date} ~ ${completed_date}`}</p>
      <p>{`상세설명 :${description}`}</p>
      <p>{`좌표계 :${coordinate}`}</p>
    </div>
  );
});

export default Project;
