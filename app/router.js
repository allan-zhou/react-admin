import React from 'react';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route } from 'react-router-dom';

const history = createBrowserHistory()

const Routers = () => (
  <Router>
    <Route>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
    </Route>
  </Router>
);

export default Routers;
