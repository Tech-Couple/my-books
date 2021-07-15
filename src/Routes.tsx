import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import My404Component from './screens/My404Component';

const Routes = (): React.ReactElement => (
  <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path='*' exact={true} component={My404Component} />
      </Switch>
  </Router>
);

export default Routes;
