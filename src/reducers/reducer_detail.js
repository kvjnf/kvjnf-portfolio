import ActionTypes from '../constants';

const initialState = {
  content: {},
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POST_DETAIL:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.FETCH_POST_DETAIL_SUCCESS:
      return {
        isLoading: false,
        content: payload.data
      };
    case ActionTypes.FETCH_POST_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.FETCH_POST_DETAIL_CLEAR:
      return {
        ...state,
        content: {}
      };
    default:
      return state;
  }
};
