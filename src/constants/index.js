import { createTypes, async } from 'redux-action-creator';

export default createTypes([
  ...async('FETCH_POSTS'),
  ...async('FETCH_POST_DETAIL'),
  ...async('FETCH_TOP'),
  'INITIAL_READY',
  'INITIAL_UNREADY',
  'IMAGES_READY',
  'IMAGES_UNREADY',
  'CHANGE_LANGUAGE',
  'CHANGE_LANGUAGE_OPEN',
  'CHANGE_LANGUAGE_CLOSE',
  'FIXED_LANG_MENU',
  'UNFIXED_LANG_MENU',
  'REMOVED_OVERRAY',
  'RESET_OVERRAY'
]);

export const baseWpPath = '/wp-json/wp/v2';
export const baseAcfPath = '/wp-json/acf/v3/pages/ID';
