import { call, put, all } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';
import { baseWpPath } from '../constants';

export default function* sagasFetchExperience() {
  try {
    const [contentJp, contentEn, contentDe] = yield all([
      call(
        api.get,
        `${baseWpPath}/experiences?embed&lang=ja&orderby=menu_order&order=asc`
      ),
      call(
        api.get,
        `${baseWpPath}/experiences?embed&lang=en&orderby=menu_order&order=asc`
      ),
      call(
        api.get,
        `${baseWpPath}/experiences?embed&lang=de&orderby=menu_order&order=asc`
      )
    ]);
    const res = {
      ja: contentJp.data,
      en: contentEn.data,
      de: contentDe.data
    };

    yield put(Actions.fetchExperienceSuccess({ data: res }));
  } catch (err) {
    yield put(Actions.fetchExperienceFail());
    console.log(err);
  }
}
