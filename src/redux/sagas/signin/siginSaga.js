import { LOGIN_REQUEST } from '../../constant/sigin/siginConstant';

// saga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../../actions/signin/SigninAction';
import api from '../../../services/api'; // Import your API functions

function* login(action) {
  try {
    const user = yield call(api.authenticate, action.payload); // Make API call
    yield put(loginSuccess(user));
    console.log('login succesfully');
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;
