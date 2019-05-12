import _ from 'lodash';
import ActionTypes from '../constants';

const initialState = {
  posts: [],
  experience: {},
  about: {},
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TOP:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_TOP_SUCCESS:
      const { posts, experience, about } = payload.data;
      return {
        ...state,
        isLoading: false,
        posts: _.unionBy(state.posts, posts.data, 'id'),
        experience,
        about
      };
    case ActionTypes.FETCH_TOP_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
