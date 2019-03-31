import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

import { Header } from './components';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const App = () => (
  <section className="section">
    <div className="container">
      <Header />
    </div>
  </section>
);

export default hot(App);
