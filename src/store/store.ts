import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

export const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(sagaMiddleware)
});
//apply saga
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export default store;
export { persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
