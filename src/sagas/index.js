import { takeLatest } from 'redux-saga/effects';
import ActionTypes from '../constants';

import sagasFetchPost from './sagas_fetchPost';
import sagasFetchTop from './sagas_fetchTop';

export default function* rootSaga() {
  yield takeLatest(ActionTypes.FETCH_POST_DETAIL, sagasFetchPost);
  yield takeLatest(ActionTypes.FETCH_TOP, sagasFetchTop);
}
