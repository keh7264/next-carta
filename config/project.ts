export enum ProjectSortTarget {
  name = 'name',
  constructionDate = 'constructionDate',
}

export enum Order {
  desc = 'desc',
  asc = 'asc',
}

export const defaultProjectOrder = {
  target: ProjectSortTarget.constructionDate,
  order: Order.asc,
};
