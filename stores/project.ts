import orderBy from 'lodash/orderBy';
import { action, computed, flow, observable } from 'mobx';
import { defaultProjectOrder } from '../config/project';
import projectRepository from '../repository/projectRepository';

export const initialProjectState = {
  project: null,
  projects: [],
  orderedProjectList: [],
  sortingCriterion: defaultProjectOrder,
};
class ProjectStore {
  @observable project = initialProjectState.project;

  @observable projects = initialProjectState.projects;

  @observable orderedProjectList = initialProjectState.orderedProjectList;

  @observable sortingCriterion = initialProjectState.sortingCriterion;

  @computed get sortProjectList() {
    return (
      orderBy(this.projects, [this.sortingCriterion.target], [this.sortingCriterion]) ||
      initialProjectState.orderedProjectList
    );
  }

  constructor(initialState) {
    this.project = initialState.project;
    this.projects = initialState.projects;
    this.orderedProjectList = initialState.orderedProjectList;
    this.sortingCriterion = initialState.sortingCriterion;
  }

  @action
  setSortingCriterion(sortingCriterion) {
    this.sortingCriterion = sortingCriterion;
  }

  findOne = flow(function* findOne(projectId) {
    const { data } = yield projectRepository.read(projectId);
    this.project = data;
    this.projects = this.projects.map((project) =>
      this.project.id === project.id ? data : project,
    );
    return data;
  });

  findAll = flow(function* findAll() {
    const { data } = yield projectRepository.list();
    this.projects = data.results;
  });
}

export default ProjectStore;
