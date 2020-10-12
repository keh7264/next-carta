import { flow, observable } from 'mobx';
import snapshotRepository from '../repository/snapshotRepository';

class SnapshotStore {
  @observable snapshot = null;

  @observable snapshots = [];

  read = flow(function* read(projectId, snapshotId) {
    const { data } = yield snapshotRepository.read(projectId, snapshotId);
    this.snapshot = data;
    this.snapshots = this.snapshots.map((snapshot) =>
      this.snapshot.id === snapshot.id ? data : snapshot,
    );
    return data;
  });

  list = flow(function* list(projectId) {
    const { data } = yield snapshotRepository.list(projectId);
    this.snapshots = data.results;
  });
}

export default SnapshotStore;
