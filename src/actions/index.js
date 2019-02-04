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
  setInitialReady: actionCreator(ActionTypes.INITIAL_READY),
  unsetInitialReady: actionCreator(ActionTypes.INITIAL_UNREADY)
};
