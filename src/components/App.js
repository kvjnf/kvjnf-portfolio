import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './partials/Header';
import Top from './Top';
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
