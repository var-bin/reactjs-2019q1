import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

import {
  Header,
  MovieList,
  ErrorBoundary
} from './components';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const App = () => (
  <ErrorBoundary>
    <section className="section">
      <Header />

      <hr />

      <MovieList />
    </section>
  </ErrorBoundary>
);

export default hot(App);
