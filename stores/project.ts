import { observable } from 'mobx';
import { onRequestGet } from '../common/api/request';
import { getJWTToken } from '../common/utils/login';
import * as urls from '../config/urls';

const ProjectStore = observable({
  project: null,
  projects: [],
  async read(projectId) {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet({
      url: urls.PROJECT(projectId),
      headers,
    });
    this.project = data;
    this.projects = this.projects.map((project) =>
      this.project.id === project.id ? data : project,
    );
    return data;
  },
  async list() {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet({
      url: urls.PROJECTS,
      headers,
    });
    this.projects = data.results;
  },
});

export default ProjectStore;
