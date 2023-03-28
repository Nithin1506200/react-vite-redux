import { Action } from '@reduxjs/toolkit';
import { dummy1_actions } from './dummy1.slice';

import { takeEvery } from 'redux-saga/effects';
function* nameChangerWorkerSaga(action: Action<string>) {
  try {
    console.warn('nameChange', action);
    yield;
  } catch (err) {
    console.error(err);
  }
}

export default function* dummy1WatcherSaga() {
  yield takeEvery(dummy1_actions.changeName.toString(), nameChangerWorkerSaga);
}
