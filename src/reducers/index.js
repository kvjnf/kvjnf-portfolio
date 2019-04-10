import { combineReducers } from 'redux';
import topReducer from './reducer_top';
import postsReducer from './reducer_panel';
import postReducer from './reducer_detail';
import initialReducer from './reducer_page';
import languageReducer from './reducer_lang';
import experienceReducer from './reducer_experience';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  initial: initialReducer,
  lang: languageReducer,
  top: topReducer,
  experience: experienceReducer
});

export default rootReducer;
