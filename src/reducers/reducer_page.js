import ActionTypes from '../constants';

const initialState = {
  pageReady: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.INITIAL_READY:
      return Object.assign({}, state, {
        pageReady: true
      });
    case ActionTypes.INITIAL_UNREADY:
      return Object.assign({}, state, {
        pageReady: false
      });
    default:
      return state;
  }
};
