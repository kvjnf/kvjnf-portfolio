import { actionCreator } from 'redux-action-creator';
import ActionTypes from '../constants';

export default {
  fetchPosts: actionCreator(ActionTypes.FETCH_POSTS),
  fetchPostsSuccess: actionCreator(ActionTypes.FETCH_POSTS_SUCCESS, 'data'),
  fetchPostsFail: actionCreator(ActionTypes.FETCH_POSTS_FAIL),
  fetchPost: actionCreator(ActionTypes.FETCH_POST_DETAIL, 'id'),
  fetchPostSuccess: actionCreator(
    ActionTypes.FETCH_POST_DETAIL_SUCCESS,
    'data'
  ),
  fetchPostFail: actionCreator(ActionTypes.FETCH_POST_DETAIL_FAIL),
  fetchTop: actionCreator(ActionTypes.FETCH_TOP),
  fetchTopSuccess: actionCreator(ActionTypes.FETCH_TOP_SUCCESS, 'data'),
  fetchTopFail: actionCreator(ActionTypes.FETCH_TOP_FAIL),
  setInitialReady: actionCreator(ActionTypes.INITIAL_READY),
  unsetInitialReady: actionCreator(ActionTypes.INITIAL_UNREADY),
  setImagesReady: actionCreator(ActionTypes.IMAGES_READY),
  setImagesUnReady: actionCreator(ActionTypes.IMAGES_UNREADY),
  removeOverray: actionCreator(ActionTypes.REMOVED_OVERRAY),
  resetOverray: actionCreator(ActionTypes.RESET_OVERRAY),
  changeLanguage: actionCreator(ActionTypes.CHANGE_LANGUAGE, 'language'),
  changeLanguageOpen: actionCreator(ActionTypes.CHANGE_LANGUAGE_OPEN),
  changeLanguageClose: actionCreator(ActionTypes.CHANGE_LANGUAGE_CLOSE),
  fixedLangMenu: actionCreator(ActionTypes.FIXED_LANG_MENU),
  unfixedLangMenu: actionCreator(ActionTypes.UNFIXED_LANG_MENU)
};
