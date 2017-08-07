import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import News from './news';
import Contacts from './contacts';
import Meeting from './meeting';
import Addnews from './news/addnews';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={News} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/meeting" component={Meeting} />
  </Switch>
);

export {
  MainRoutes,
};
