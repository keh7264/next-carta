const apiPath = '/api';
const authPath = '/auth';
const staticPath = '/static';

// RESTful API urls
export const PROJECTS = '/projects';
export const PROJECT = (projectId) => {
  return `${apiPath}/${PROJECTS}/${projectId}`;
};

export const SNAPSHOTS = (projectId) => {
  return `${PROJECT(projectId)}/snapshots`;
};

export const SNAPSHOT = (projectId, snapshotId) => {
  return `${SNAPSHOTS(projectId)}/${snapshotId}`;
};

export const VIDEOS = (projectId) => {
  return `${PROJECT(projectId)}/videos`;
};

export const VIDEO = (projectId, videoId) => {
  return `${VIDEOS(projectId)}/${videoId}`;
};

export const PAUSE_SNAPSHOT = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/pause`;
};

export const PROCESS_SNAPSHOT = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/process`;
};

export const REPORT_SNAPSHOT = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/report`;
};

export const CAPTURES = (snapshotId) => {
  return `${apiPath}/snapshots/${snapshotId}/captures`;
};

export const CAPTURE = (snapshotId, captureId) => {
  return `${CAPTURES(snapshotId)}/${captureId}`;
};

export const ANNOTATIONS = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/annotations`;
};

export const AREAS = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/annotations/areas`;
};

export const AREA = (projectId, snapshotId, annotationId) => {
  return `${AREAS(projectId, snapshotId)}/${annotationId}`;
};

export const AREA_POSITIONS = (
  projectId,
  snapshotId,
  annotationId,
  positionId,
) => {
  return `${AREA(projectId, snapshotId, annotationId)}/positions/${positionId}`;
};

export const AREA_VOLUMES = (projectId, snapshotId, annotationId) => {
  return `${AREA(projectId, snapshotId, annotationId)}/volumes`;
};

export const AREA_VOLUME = (projectId, snapshotId, annotationId, volumeId) => {
  return `${AREA_VOLUMES(projectId, snapshotId, annotationId)}/${volumeId}`;
};

export const LINES = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/annotations/lines`;
};

export const LINE = (projectId, snapshotId, annotationId) => {
  return `${LINES(projectId, snapshotId)}/${annotationId}`;
};

export const LINE_POSITIONS = (
  projectId,
  snapshotId,
  annotationId,
  positionId,
) => {
  return `${LINE(projectId, snapshotId, annotationId)}/positions/${positionId}`;
};

export const LINE_ELEVATIONS = (projectId, snapshotId, annotationId) => {
  return `${LINE(projectId, snapshotId, annotationId)}/elevations`;
};

export const LINE_ELEVATION = (
  projectId,
  snapshotId,
  annotationId,
  elevationId,
) => {
  return `${LINE_ELEVATIONS(
    projectId,
    snapshotId,
    annotationId,
  )}/${elevationId}`;
};

export const POINTS = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/annotations/points`;
};

export const POINT = (projectId, snapshotId, annotationId) => {
  return `${POINTS(projectId, snapshotId)}/${annotationId}`;
};

export const POINT_POSITIONS = (
  projectId,
  snapshotId,
  annotationId,
  positionId,
) => {
  return `${POINT(
    projectId,
    snapshotId,
    annotationId,
  )}/positions/${positionId}`;
};

export const AERIAL_IMAGES = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/aerialimages`;
};

export const AERIAL_IMAGE = (projectId, snapshotId, aerialImageId) => {
  return `${AERIAL_IMAGES(projectId, snapshotId)}/${aerialImageId}`;
};

export const AERIAL_IMAGES_ARCHIVE = (projectId, snapshotId) => {
  return `${AERIAL_IMAGES(projectId, snapshotId)}/archive`;
};

export const SNAPSHOT_FILES = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/files`;
};

export const SNAPSHOT_FILE = (projectId, snapshotId, snapshotFileId) => {
  return `${SNAPSHOT_FILES(projectId, snapshotId)}/${snapshotFileId}`;
};

export const DRAWINGS = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/drawings`;
};

export const DRAWING = (projectId, snapshotId, drawingId) => {
  return `${DRAWINGS(projectId, snapshotId)}/${drawingId}`;
};

export const EXPORT_URLS = (snapshotId) => {
  return `${apiPath}/snapshots/${snapshotId}/export/urls`;
};

export const GCPS = (snapshotId) => {
  return `${apiPath}/snapshots/${snapshotId}/gcps`;
};

export const GCP = (snapshotId, gcpId?) => {
  return gcpId ? `${GCPS(snapshotId)}/${gcpId}` : GCPS(snapshotId);
};

export const GCP_LOCATIONS = (snapshotId, gcpId?) => {
  return `${GCP(snapshotId, gcpId)}/locations`;
};

export const GCP_LOCATION = (snapshotId, gcpId, gcpLocationId) => {
  return `${GCP_LOCATIONS(snapshotId, gcpId)}/${gcpLocationId}`;
};

export const PROJECT_USERS = (projectId) => {
  return `${PROJECT(projectId)}/projectusers`;
};

export const PROJECT_USER = (projectId, projectUserId) => {
  return `${PROJECT(projectId)}/projectusers/${projectUserId}`;
};

export const PROJECT_INVITEES = (projectId) => {
  return `${PROJECT(projectId)}/invites`;
};

export const PROJECT_INVITEE = (projectId, projectInviteeId) => {
  return `${PROJECT(projectId)}/invites/${projectInviteeId}`;
};

export const WATCH_CREATE = (projectId, snapshotId) => {
  return `${SNAPSHOT(projectId, snapshotId)}/watchtoken`;
};

export const WATCH_VERIFY = (token) => {
  return `${apiPath}/watchtoken/${token}`;
};

export const USER_LOGIN = `${authPath}/login`;

export const USER_LOGOUT = `${authPath}/expiry`;

export const JWT_REFRESH = `${authPath}/refresh`;

export const USER_SIGNUP = `${authPath}/signup`;

export const NEW_PASSWORD = `${authPath}/password/new`;

export const MAP_AUTH_KEY = `${authPath}/key/mapapi`;

export const USER_INVITE = (code) => {
  return `${authPath}/invite/${code}`;
};

export const USER_INFO = `${authPath}/info`;

export const COMPANY = `${authPath}/company`;

export const GCP_TEMPLATE = `${staticPath}/gcp_template`;

export const COORDINATES = (search = '', limit = '') =>
  `${staticPath}/coordinates?search=${search}&limit=${limit}`;

export const USED_COORDINATES = (search = '') =>
  `${staticPath}/coordinates/used?search=${search}`;

export default {
  PROJECTS,
  PROJECT,
  SNAPSHOTS,
  SNAPSHOT,
  PROCESS_SNAPSHOT,
  PAUSE_SNAPSHOT,
  REPORT_SNAPSHOT,
  CAPTURES,
  CAPTURE,
  ANNOTATIONS,
  AREAS,
  AREA,
  AREA_POSITIONS,
  AREA_VOLUMES,
  AREA_VOLUME,
  LINES,
  LINE,
  LINE_POSITIONS,
  LINE_ELEVATIONS,
  LINE_ELEVATION,
  POINTS,
  POINT,
  POINT_POSITIONS,
  AERIAL_IMAGES,
  AERIAL_IMAGE,
  SNAPSHOT_FILES,
  SNAPSHOT_FILE,
  DRAWINGS,
  DRAWING,
  PROJECT_USERS,
  PROJECT_USER,
  PROJECT_INVITEES,
  PROJECT_INVITEE,
  WATCH_CREATE,
  WATCH_VERIFY,
  VIDEO,
  USER_LOGIN,
  USER_LOGOUT,
  USER_SIGNUP,
  USER_INVITE,
  USER_INFO,
  NEW_PASSWORD,
  COMPANY,
  JWT_REFRESH,
  USED_COORDINATES,
};
