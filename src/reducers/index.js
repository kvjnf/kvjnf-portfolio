import { combineReducers } from 'redux';
import topReducer from './reducer_top';
import postReducer from './reducer_detail';
import languageReducer from './reducer_lang';

const rootReducer = combineReducers({
  post: postReducer,
  lang: languageReducer,
  top: topReducer
});

export default rootReducer;
