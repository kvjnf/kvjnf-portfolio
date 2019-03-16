import ActionTypes from '../constants';

const initialState = {
  current: 'en',
  options: ['ja', 'en', 'de'],
  open: false,
  fixed: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHANGE_LANGUAGE_OPEN:
      return { ...state, open: true };
    case ActionTypes.CHANGE_LANGUAGE_CLOSE:
      return { ...state, open: false };
    case ActionTypes.CHANGE_LANGUAGE:
      return { ...state, current: payload.language };
    case ActionTypes.FIXED_LANG_MENU:
      return { ...state, fixed: true };
    case ActionTypes.UNFIXED_LANG_MENU:
      return { ...state, fixed: false };
    default:
      return state;
  }
};
