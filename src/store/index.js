import '@babel/polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function() {
  /* eslint-disable no-underscore-dangle */
  // Middleware
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  // Redux Logger
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  // Enhancer
  const enhancers = [];
  let composeEnhancers = compose;

  // ReduxDevTOOL
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);
  /* eslint-enable */

  return store;
}
