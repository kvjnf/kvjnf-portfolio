import { combineReducers } from 'redux';
import postsReducer from './top_panel_reducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
