import { all } from 'redux-saga/effects';

import menssages from './menssages/saga';

export default function* rootSaga() {
  return yield all([menssages]);
}
