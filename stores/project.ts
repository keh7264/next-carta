import orderBy from 'lodash/orderBy';
import { computed, observable } from 'mobx';
import { onRequestGet } from '../common/api/request';
import { getJWTToken } from '../common/utils/login';
import { defaultProjectOrder } from '../config/project';
import * as urls from '../config/urls';

const projectStore = observable({
  project: null,
  projects: [],
  orderedProjectList: [],
  projectsOrderBy: defaultProjectOrder,
  async findOne(projectId) {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet(urls.PROJECT(projectId), { headers });
    this.project = data;
    this.projects = this.projects.map((project) =>
      this.project.id === project.id ? data : project,
    );
    return data;
  },
  async findAll() {
    const headers = { Authorization: `JWT ${getJWTToken()}` };
    const { data } = await onRequestGet(urls.PROJECTS, {
      headers,
    });
    this.projects = data.results;
  },
  // sortProjectList() {
  //   // computed로 할 수 있는 방법을
  //   this.projects = orderBy(this.projects, [this.projectsOrderBy.target], [this.projectsOrderBy]);
  // },
});

export const sortProjectList = computed(() => {
  return orderBy(
    projectStore.projects,
    [projectStore.projectsOrderBy.target],
    [projectStore.projectsOrderBy],
  );
});

export default projectStore;
