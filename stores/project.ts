import orderBy from 'lodash/orderBy';
import { action, computed, flow, observable } from 'mobx';
import { defaultProjectOrder } from '../config/project';
import projectRepository from '../repository/projectRepository';

class ProjectStore {
  @observable project = null;

  @observable projects = [];

  @observable orderedProjectList = [];

  @observable sortingCriterion = defaultProjectOrder;

  @computed get sortProjectList() {
    return orderBy(this.projects, [this.sortingCriterion.target], [this.sortingCriterion]);
  }

  @action
  setSortingCriterion(sortingCriterion) {
    this.sortingCriterion = sortingCriterion;
  }

  findOne = flow(function* findOne(projectId) {
    const { data } = yield projectRepository.findOne(projectId);
    this.project = data;
    this.projects = this.projects.map((project) =>
      this.project.id === project.id ? data : project,
    );
    return data;
  });

  findAll = flow(function* findAll() {
    const { data } = yield projectRepository.findAll();
    this.projects = data.results;
  });
}

export default new ProjectStore();
