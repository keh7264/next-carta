import { onRequestGet } from '../common/api/request';
import { getAuthHeader } from '../common/utils/login';

class SnapshotRepository {
  URL = (projectId) => `/api/projects/${projectId}/snapshots`;

  list(projectId) {
    return onRequestGet(this.URL(projectId), { headers: getAuthHeader() });
  }

  read(projectId, snapshotId) {
    return onRequestGet(`${this.URL(projectId)}/${snapshotId}`, { headers: getAuthHeader() });
  }
}

export default new SnapshotRepository();
