import { actionCreator } from 'redux-action-creator';
import ActionTypes from '../constants';

export default {
  fetchPosts: actionCreator(ActionTypes.FETCH_POSTS),
  fetchPostsSuccess: actionCreator(ActionTypes.FETCH_POSTS_SUCCESS, 'posts'),
  fetchPostsFail: actionCreator(ActionTypes.FETCH_POSTS_FAIL)
};
