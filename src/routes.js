import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ListEpisodes from './pages/ListEpisode';
import Watch from './pages/Watch';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/episodes" component={ListEpisodes} />
      <Route path="/watch" component={Watch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
