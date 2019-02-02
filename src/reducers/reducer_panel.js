import _ from 'lodash';
import ActionTypes from '../constants';

const initialState = {
  contents: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POSTS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        contents: _.unionBy(state.contents, payload.data, 'id')
      });
    case ActionTypes.FETCH_POSTS_FAIL:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};
