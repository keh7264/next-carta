import { observable } from 'mobx';
import { onRequestPost } from '../common/api/request';
import { setUserInfoToStorage, setValidateInTime } from '../common/utils/login';
import * as urls from '../config/urls';

const UserStore = observable({
  isLoggedIn: false,
  isReadOnly: false,
  token: '',
  async read(payload) {
    const { status, data } = await onRequestPost({
      url: urls.USER_LOGIN,
      params: payload,
    });
    const { validateIn, ...user } = data;
    setUserInfoToStorage(user);
    setValidateInTime(validateIn);
    this.isLoggedIn = true;
  },
});

export default UserStore;
