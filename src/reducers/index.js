import { combineReducers } from 'redux';
import postsReducer from './reducer_panel';
import postReducer from './reducer_detail';
import initialReducer from './reducer_page';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  initial: initialReducer
});

export default rootReducer;
