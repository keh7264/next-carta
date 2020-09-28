import { observable } from 'mobx';
import { onRequestGet } from '../common/api/request';
import { getJWTToken } from '../common/utils/login';
import * as urls from '../config/urls';

const SnapshotStore = observable({
  snapshot: null,
  snapshots: [],
  async read(projectId, snapshotId) {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet({
      url: urls.SNAPSHOT(projectId, snapshotId),
      headers,
    });
    this.snapshot = data;
    this.snapshots = this.snapshots.map((snapshot) =>
      this.snapshot.id === snapshot.id ? data : snapshot,
    );
    return data;
  },
  async list(projectId) {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet({
      url: urls.SNAPSHOTS(projectId),
      headers,
    });
    this.snapshots = data.results;
  },
});

export default SnapshotStore;
