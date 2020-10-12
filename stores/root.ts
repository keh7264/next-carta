import { useStaticRendering } from 'mobx-react';
// Stores
import ProjectStore, { initialProjectState } from './project';
import SnapshotStore from './snapshots';
import UserStore from './user';

const isServer = typeof window === 'undefined';
let store = null;
useStaticRendering(isServer);

const initialRootState = {
  projectState: initialProjectState,
};

export class RootStore {
  projectStore;

  userStore;

  snapshotStore;

  constructor(initialState) {
    this.projectStore = new ProjectStore(initialState.projectState);
    this.userStore = new UserStore();
    this.snapshotStore = new SnapshotStore();
  }
}

export default function initializeStore(initialState = initialRootState) {
  if (isServer) {
    return new RootStore(initialState);
  }
  if (store === null) {
    store = new RootStore(initialState);
  }

  return store;
}
