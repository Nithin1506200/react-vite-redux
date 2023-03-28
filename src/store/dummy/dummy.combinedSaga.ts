import { fork, all } from 'redux-saga/effects';
import dummy1WatcherSaga from './dummy1/dummy1.saga';
import dummy2WatcherSaga from './dummy2/dummy2.saga';
export default function* dummyCombinedSaga() {
  yield all([dummy2WatcherSaga, dummy1WatcherSaga].map((saga) => fork(saga)));
}
