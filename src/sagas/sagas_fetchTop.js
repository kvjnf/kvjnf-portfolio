import { call, put, all } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';
import { baseWpPath } from '../constants';

export default function* sagasFetchTop() {
  try {
    const [posts, aboutJp, aboutEn, experienceJp, experienceEn] = yield all(
      returnFetchUrls()
    );
    const res = {
      posts,
      about: {
        ja: aboutJp.data[0],
        en: aboutEn.data[0]
      },
      experience: {
        ja: experienceJp.data,
        en: experienceEn.data
      }
    };
    yield put(Actions.fetchTopSuccess({ data: res }));
  } catch (err) {
    yield put(Actions.fetchTopFail());
    console.log(err);
  }
}

function returnFetchUrls() {
  const apiResources = [
    'posts?_embed',
    'top?_embed',
    'top?_embed&lang=en',
    'experiences?embed&lang=ja&orderby=menu_order&order=asc',
    'experiences?embed&lang=en&orderby=menu_order&order=asc'
  ];

  return apiResources.map(endpoint =>
    call(api.get, `${baseWpPath}/${endpoint}`)
  );
}
