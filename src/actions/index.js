import { actionCreator } from 'redux-action-creator';
import ActionTypes from '../constants';

export default {
  fetchPost: actionCreator(ActionTypes.FETCH_POST_DETAIL, 'id'),
  fetchPostSuccess: actionCreator(
    ActionTypes.FETCH_POST_DETAIL_SUCCESS,
    'data'
  ),
  fetchPostFail: actionCreator(ActionTypes.FETCH_POST_DETAIL_FAIL),
  fetchTop: actionCreator(ActionTypes.FETCH_TOP),
  fetchTopSuccess: actionCreator(ActionTypes.FETCH_TOP_SUCCESS, 'data'),
  fetchTopFail: actionCreator(ActionTypes.FETCH_TOP_FAIL),
  changeLanguage: actionCreator(ActionTypes.CHANGE_LANGUAGE, 'language'),
  changeLanguageOpen: actionCreator(ActionTypes.CHANGE_LANGUAGE_OPEN),
  changeLanguageClose: actionCreator(ActionTypes.CHANGE_LANGUAGE_CLOSE),
  fixedLangMenu: actionCreator(ActionTypes.FIXED_LANG_MENU),
  unfixedLangMenu: actionCreator(ActionTypes.UNFIXED_LANG_MENU)
};
