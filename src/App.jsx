import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import {
  Route,
  Switch
} from "react-router-dom";

import {
  HomeComponent,
  SearchComponent,
  PageNotFoundComponent,
  MovieInfo
} from 'app-pages';

import {
  Header,
  ErrorBoundary
} from 'app-components';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const App = () => {
  return (
    <ErrorBoundary>
      <Header />

      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/search/:searchQuery" component={SearchComponent} />
        <Route path="/movie/:movieId" component={MovieInfo} />
        <Route component={PageNotFoundComponent} />
      </Switch>
    </ErrorBoundary>
  )
};

export default hot(App);
