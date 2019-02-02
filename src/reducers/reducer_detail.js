import ActionTypes from '../constants';

const initialState = {
  content: {},
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POST_DETAIL:
      return Object.assign({}, state, {
        isLoading: true
      });
    case ActionTypes.FETCH_POST_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        content: payload.data
      });
    case ActionTypes.FETCH_POST_DETAIL_FAIL:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};
