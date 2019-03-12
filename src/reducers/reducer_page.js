import ActionTypes from '../constants';

const initialState = {
  loadReady: false,
  imgReady: false,
  isRemoved: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.INITIAL_READY:
      return { ...state, loadReady: true };
    case ActionTypes.INITIAL_UNREADY:
      return { ...state, loadReady: false };
    case ActionTypes.IMAGES_READY:
      return { ...state, imgReady: true };
    case ActionTypes.IMAGES_UNREADY:
      return {
        ...state,
        imgReady: false
      };
    case ActionTypes.REMOVED_OVERRAY:
      return {
        ...state,
        isRemoved: true
      };
    case ActionTypes.RESET_OVERRAY:
      return {
        ...state,
        loadReady: false,
        imgReady: false,
        isRemoved: false
      };
    default:
      return state;
  }
};
