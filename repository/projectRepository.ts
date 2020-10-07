import { onRequestGet } from '../common/api/request';
import { getJWTToken } from '../common/utils/login';

class ProjectRepository {
  URL = '/api/projects';

  headers = {};
  //   constructor(attr) {
  //     Object.assign(this, attr);
  //   }

  findAll() {
    this.headers = { Authorization: `JWT ${getJWTToken()}` };
    return onRequestGet(this.URL, { headers: this.headers });
  }

  findOne(projectId) {
    this.headers = { Authorization: `JWT ${getJWTToken()}` };
    return onRequestGet(`${this.URL}/${projectId}`, { headers: this.headers });
  }
}

export default new ProjectRepository();
