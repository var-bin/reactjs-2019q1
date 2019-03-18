import React from 'react';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

import {
  CreateElement,
  ReactComponent,
  ReactPureComponent,
  FunctionalComponent
} from './ht1';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true // RHL will not change render method
});

const App = () => (
  <div>
    <CreateElement />
    <ReactComponent />
    <ReactPureComponent />
    <ReactPureComponent />
    <ReactPureComponent />
    <FunctionalComponent
      text="This is a functional component!"
    />
  </div>
);

export default hot(App);
