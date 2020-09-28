import * as config from '../../config';

export function setRequestTime(time: number): void {
  localStorage.setItem('reqTime', `${time}`);
}

export function getRequestTime(): number {
  return +localStorage.getItem('reqTime');
}

export function needToModifyToken(): boolean {
  const curTime = new Date().getTime();
  const requestTime = getRequestTime();
  const validateIn = +getValidateInTime();
  let result = true;

  // 토큰 유효 시간이 절반 이하로 남았을 경우 token 갱신
  if ((curTime - requestTime) / 1000 < validateIn / 2) {
    result = !result;
  }

  return result;
}

export function setUserInfoToStorage(userInfo: object): void {
  localStorage.setItem('user', getBase64ToJson(userInfo));
}

function getBase64ToJson(jsonObj): string {
  return encodeBase64(JSON.stringify(jsonObj));
}

export function getUserInfoToStorage(): config.LoginUser {
  return getJsonToBase64(localStorage.getItem('user'));
}

function encodeBase64(value: string): string {
  return btoa(value);
}

function decodeBase64(value: string): string {
  return atob(value);
}

function getJsonToBase64(str: string) {
  let result;

  if (str === '') {
    result = {};
  }

  try {
    result = JSON.parse(decodeBase64(str));
  } catch (e) {
    result = {};
  }

  return result;
}
export function removeUserInfoToStorage(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('reqTime');
  localStorage.removeItem('validateIn');
}

export function setValidateInTime(validateIn?: number): void {
  localStorage.setItem('validateIn', `${validateIn || 50}`);
}

export function getValidateInTime(): string | null {
  return localStorage.getItem('validateIn');
}

export function modifyJwtToken(jwtTokenObj): void {
  const curUserInfo = getUserInfoToStorage();
  const curAccessToken = curUserInfo.access;
  const curRefreshToken = curUserInfo.refresh;
  const { access, refresh, validateIn } = jwtTokenObj;

  if (access == null || refresh == null) {
    return;
  }

  if (curAccessToken != null && curAccessToken !== access && curRefreshToken !== refresh) {
    curUserInfo.access = access;
    curUserInfo.refresh = refresh;
    setUserInfoToStorage(curUserInfo);
    setValidateInTime(validateIn);
  }
}

export function getJWTToken(): string {
  const userInfo = getUserInfoToStorage();

  return userInfo && userInfo.access;
}

export function getRefreshToken(): string {
  const userInfo = getUserInfoToStorage();

  return userInfo.refresh;
}

export function isLogin(): boolean {
  return !!getJWTToken();
}
