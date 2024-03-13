// rootSaga.js
import { all } from 'redux-saga/effects';
import authSaga from './signin/siginSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    // Add other sagas here if needed
  ]);
}

export default rootSaga;
