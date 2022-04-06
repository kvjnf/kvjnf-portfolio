import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { GlobalCss, theme } from './components/styles/global';
import { ResetCss } from './components/styles/reset';

// import configureStore from './store';

// const store = configureStore();
// const mainRender = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   );
// };

// if (process.env.NODE_ENV === 'development') {
//   setTimeout(mainRender, 10);
// } else {
//   mainRender();
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalCss />
          <ResetCss />
          <App />
        </>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);