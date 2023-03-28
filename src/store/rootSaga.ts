import { all, fork } from 'redux-saga/effects';
import dummyCombinedSaga from './dummy/dummy.combinedSaga';

export default function* rootSaga() {
  yield all([dummyCombinedSaga].map((saga) => fork(saga)));
}
