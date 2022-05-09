import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './app/App';
import { GlobalCss, theme } from './components/styles/global';
import { ResetCss } from './components/styles/reset';
import { store } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <ResetCss />
          <GlobalCss />
          <App />
        </>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);