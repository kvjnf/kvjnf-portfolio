import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './../history';
import Header from './partials/Header';
import Top from './Top';
import Detail from './Details';
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
