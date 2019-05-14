import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/reset.scss';
import './styles/common.scss';

import App from './components/App';
import configureStore from './store';

const store = configureStore();
const mainRender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV === 'development') {
  setTimeout(mainRender, 10);
} else {
  mainRender();
}
