import { takeLatest } from 'redux-saga/effects';
import ActionTypes from '../constants';

import sagasFetchPosts from './sagas_fetchPosts';

export default function* rootSaga() {
  yield takeLatest(ActionTypes.FETCH_POSTS, sagasFetchPosts);
}
