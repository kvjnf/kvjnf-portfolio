import { combineReducers } from 'redux';
import postsReducer from './reducer_panel';
import postReducer from './reducer_detail';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer
});

export default rootReducer;
