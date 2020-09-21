import { observable } from 'mobx';
import { onRequestPost } from '../common/api/request';
import urls from '../config/urls';

const UserStore = observable({
  jwt: null,
  read(payload) {
    console.log(urls.USER_LOGIN);
    onRequestPost({
      url: urls.USER_LOGIN,
      params: payload,
    }).then(({ status, data }) => {
      console.log(status, data);
      this.jwt = data;
    });
  },
});

export default UserStore;
