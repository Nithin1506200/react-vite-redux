import { Action } from '@reduxjs/toolkit';
import { dummy2_actions } from './dummy2.slice';

import { delay, takeEvery } from 'redux-saga/effects';
function* nameChangerWorkerSaga(action: Action<string>) {
  try {
    console.warn('nameChange 2', action);
    yield delay(10000);
    console.warn('this is after 10s');
  } catch (err) {
    console.error(err);
  }
}

export default function* dummy2WatcherSaga() {
  yield takeEvery(dummy2_actions.changeNameOfSlice2.toString(), nameChangerWorkerSaga);
}
