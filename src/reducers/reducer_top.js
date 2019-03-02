import ActionTypes from '../constants';

const initialState = {
  content: {},
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TOP:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_TOP_SUCCESS:
      return { ...state, isLoading: false, content: payload.data };
    case ActionTypes.FETCH_TOP_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
