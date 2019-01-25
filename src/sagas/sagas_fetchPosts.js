import { call, put } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';

export default function* sagasFetchPosts() {
  try {
    const res = yield call(api.get('/wp-json/v2/posts'));

    yield put(Actions.fetchPostsSuccess(res));
  } catch (err) {
    yield put(Actions.fetchPostsFail());
    console.log(err);
  }
}
