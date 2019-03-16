import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import history from './../history';
import Header from './partials/Header';
import Top from './Top';
import Detail from './Details';
import NotFound from './NotFound';

const App = ({ initial }) => {
  return (
    <div className={initial.isRemoved ? '' : 'loading'}>
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

function mapStateToProps(state) {
  const { initial } = state;
  return { initial };
}

export default connect(
  mapStateToProps,
  null
)(App);
