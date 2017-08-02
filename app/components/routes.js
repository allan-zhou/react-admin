import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import News from './news';
import Addnews from './news/addnews';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={News} />
    <Route path="/addnews" component={Addnews} />
  </Switch>
);

const HeaderRoutes = () => (
  <Switch>
    <Route path="/news" component={Home} />
  </Switch>
);

export {
  HeaderRoutes,
  MainRoutes,
};
