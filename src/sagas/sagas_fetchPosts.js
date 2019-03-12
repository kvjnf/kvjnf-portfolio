import { call, put } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';
import { baseWpPath } from '../constants';

export default function* sagasFetchPosts() {
  try {
    const res = yield call(api.get, `${baseWpPath}/posts?_embed`);

    yield put(Actions.fetchPostsSuccess(res));
    yield put(Actions.setInitialReady());
  } catch (err) {
    yield put(Actions.fetchPostsFail());
    console.log(err);
  }
}
