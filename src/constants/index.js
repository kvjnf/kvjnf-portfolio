import { createTypes, async } from 'redux-action-creator';

export default createTypes([
  ...async('FETCH_POSTS'),
  ...async('FETCH_POSTS_DETAIL'),
  'INITIAL_READY'
]);
