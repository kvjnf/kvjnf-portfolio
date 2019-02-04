import createHistory from 'history/createBrowserHistory';

const browserHistory = createHistory();

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});

export default browserHistory;
