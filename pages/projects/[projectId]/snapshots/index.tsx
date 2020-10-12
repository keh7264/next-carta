import { Card, Container } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

const Snapshots = ({ store: { snapshotStore } }) => {
  const router = useRouter();
  const { snapshots } = snapshotStore;
  const { projectId } = router.query;

  useEffect(() => {
    if (projectId) {
      snapshotStore.list(projectId);
    }
  }, [projectId]);

  return (
    <ContainerEx>
      {snapshots.length > 0 &&
        snapshots.map(({ id, take_date, description, data_process_history }) => {
          return (
            <Link
              key={id}
              href="/projects/[projectId]/snapshots/[snapshotId]"
              as={`/projects/${projectId}/snapshots/${id}`}
            >
              <CardWrapper>
                <p>{`takeDate :${take_date}`}</p>
                <p>{`상세설명 :${description}`}</p>
                <p>{data_process_history.status}</p>
              </CardWrapper>
            </Link>
          );
        })}
    </ContainerEx>
  );
};

export default inject('store')(observer(Snapshots));

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
