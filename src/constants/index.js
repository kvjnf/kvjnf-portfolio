import { createTypes, async } from 'redux-action-creator';

export default createTypes([
  ...async('FETCH_POSTS'),
  ...async('FETCH_POST_DETAIL'),
  'INITIAL_READY'
]);

export const baseWpPath = '/wp-json/wp/v2';
export const baseAcfPath = '/wp-json/acf/v3/pages/ID';
