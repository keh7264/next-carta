import { flow, observable } from 'mobx';
import { setUserInfoToStorage, setValidateInTime } from '../common/utils/login';
import userRepository from '../repository/userRepository';

class UserStore {
  @observable isLoggedIn = false;

  @observable isReadOnly = false;

  token = '';

  login = flow(function* login(payload) {
    const { data } = yield userRepository.login(payload);
    const { validateIn, ...user } = data;
    setUserInfoToStorage(user);
    setValidateInTime(validateIn);
    this.isLoggedIn = true;
  });
}

export default UserStore;
