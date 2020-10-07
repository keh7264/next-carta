import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import snapshotStore from '../../../../../stores/snapshots';

const Snapshot = observer(() => {
  const router = useRouter();
  const { projectId, snapshotId } = router.query;
  const { snapshot } = snapshotStore;

  useEffect(() => {
    if (projectId && snapshotId) {
      snapshotStore.read(projectId, snapshotId);
    }
  }, [projectId, snapshotId]);

  if (!snapshot) {
    return <div>snapshot is Empty</div>;
  }

  const { take_date, description } = snapshot;

  return (
    <div>
      <p>{`촬영일 :${take_date}`}</p>
      <p>{`메모 :${description}`}</p>
    </div>
  );
});

export default Snapshot;
