import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

const history = createBrowserHistory();

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

const About = () => {
  return (
    <div>
      About
    </div>
  );
};


ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={Home} />
  </Router>
  , document.getElementById('root'));
