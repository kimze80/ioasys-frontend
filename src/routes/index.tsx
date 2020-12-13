import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Enterprise from '../pages/Enterprise';
// import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/home" isPrivate component={Home} />
    <Route path="/enterprise/:id" isPrivate component={Enterprise} />
  </Switch>
);

export default Routes;
