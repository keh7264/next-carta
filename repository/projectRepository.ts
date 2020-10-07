import { onRequestGet } from '../common/api/request';
import { getAuthHeader } from '../common/utils/login';

class ProjectRepository {
  URL = '/api/projects';

  list() {
    return onRequestGet(this.URL, { headers: getAuthHeader() });
  }

  read(projectId) {
    return onRequestGet(`${this.URL}/${projectId}`, { headers: getAuthHeader() });
  }
}

export default new ProjectRepository();
