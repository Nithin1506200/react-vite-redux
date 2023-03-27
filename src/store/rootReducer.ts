import { combineReducers } from '@reduxjs/toolkit';
import dummyReducer from './dummy/dummy.combinedReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['dummyReducer']
};

export const rootReducer = combineReducers({
  dummyReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export { persistedReducer };
