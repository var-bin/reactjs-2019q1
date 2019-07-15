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
  MovieComponent
} from 'app-pages';

import {
  Header,
  ErrorBoundary
} from 'app-components';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const App = (props) => {
  console.log('App: ', props);
  return (
    <ErrorBoundary>
      <Header />

      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/search" component={SearchComponent} />
        <Route path="/movie/:id" component={MovieComponent} />
        <Route component={PageNotFoundComponent} />
      </Switch>
    </ErrorBoundary>
  )
};

export default hot(App);
