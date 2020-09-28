import { observable } from 'mobx';

const ApiErrorStore = observable({
  errorCode: '',
  status: '',
  setApiError(errorCode, status) {
    this.errorCode = errorCode;
    this.status = status;
  },
  confirmBtnClick(onClick?) {
    // onClick 메소드에 bind 했을 경우 보통 event 객체가 들어있음.
    if (typeof onClick === 'function') {
      onClick();
    }
    if (this.status === 404) {
      // go '/'
    }
    this.cleanErrorMessage();
  },
  cleanErrorMessage() {
    this.errorCode = '';
    this.status = '';
  },
});

export default ApiErrorStore;
