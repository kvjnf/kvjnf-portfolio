import { call, put, all } from 'redux-saga/effects';
import Actions from '../actions';
import api from '../apis';
import { baseWpPath, baseAcfPath } from '../constants';

export default function* sagasFetchPost({ payload }) {
  try {
    const { id } = payload;
    const acfUrl = baseAcfPath.replace(/ID/, id);
    const photoGal1 =
      acfUrl + '/project_capture?type=photo_gallery&orderby=post__in';
    const photoGal2 =
      acfUrl + '/project_capture2?type=photo_gallery&orderby=post__in';
    const [post, postEn, postDe, acfGallery, acfGallery2] = yield all([
      call(api, `${baseWpPath}/posts/${id}?_embed`),
      call(api, `${baseWpPath}/posts/${id}?_embed&lang=en`),
      call(api, `${baseWpPath}/posts/${id}?_embed&lang=de`),
      call(api, photoGal1),
      call(api, photoGal2)
    ]);
    const res = {
      ja: post.data,
      en: postEn.data,
      de: postDe.data,
      eye_catch: {
        pc: acfGallery.data[0],
        sp: acfGallery.data[1]
      },
      project_detail: acfGallery2.data
    };

    yield put(Actions.fetchPostSuccess({ data: res }));
    yield put(Actions.setInitialReady());
  } catch (err) {
    yield put(Actions.fetchPostFail());
    console.error(err);
  }
}
