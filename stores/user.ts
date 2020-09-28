import { observable } from 'mobx';
import { getQuery, onRequestPost } from '../common/api/request';
import { setUserInfoToStorage, setValidateInTime } from '../common/utils/login';
import * as urls from '../config/urls';

const UserStore = observable({
  jwt: null,
  async read(payload) {
    const { status, data } = await onRequestPost({
      url: urls.USER_LOGIN,
      params: payload,
    });
    console.log(status, data);
    const { validateIn, ...user } = data;
    setUserInfoToStorage(user);
    setValidateInTime(validateIn);
  },
});

export default UserStore;
