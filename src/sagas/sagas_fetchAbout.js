import { call, put, all } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';
import { baseWpPath } from '../constants';

export default function* sagasFetchTop() {
  try {
    const [contentJp, contentEn, contentDe] = yield all([
      call(api.get, `${baseWpPath}/top?_embed`),
      call(api.get, `${baseWpPath}/top?_embed&lang=en`),
      call(api.get, `${baseWpPath}/top?_embed&lang=de`)
    ]);
    const res = {
      ja: contentJp.data[0],
      en: contentEn.data[0],
      de: contentDe.data[0]
    };

    yield put(Actions.fetchTopSuccess({ data: res }));
  } catch (err) {
    yield put(Actions.fetchTopFail());
    console.log(err);
  }
}
