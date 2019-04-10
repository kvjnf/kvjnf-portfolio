import ActionTypes from '../constants';

const initialState = {
  contents: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_EXPERIENCE:
      return { ...state, isLoading: true };
    case ActionTypes.FETCH_EXPERIENCE_SUCCESS:
      return { ...state, isLoading: false, contents: payload.data };
    case ActionTypes.FETCH_EXPERIENCE_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
