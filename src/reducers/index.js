import { combineReducers } from 'redux';
import topReducer from './reducer_top';
import postReducer from './reducer_detail';
import initialReducer from './reducer_page';
import languageReducer from './reducer_lang';

const rootReducer = combineReducers({
  post: postReducer,
  initial: initialReducer,
  lang: languageReducer,
  top: topReducer
});

export default rootReducer;
