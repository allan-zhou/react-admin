import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home';
import News from './news/news';

const App = () => (
  <Router>
    <Route>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
    </Route>
  </Router>
);

export default App;
