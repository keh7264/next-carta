import { onRequestPost } from '../common/api/request';

class UserRepository {
  URL = '/auth';

  login(payload: { email: string; password: string }) {
    return onRequestPost(`${this.URL}/login`, payload);
  }
}

export default new UserRepository();
