import React from 'react';
import ReactDOM from 'react-dom'

import {
  CreateElement,
  ReactComponent,
  ReactPureComponent,
  FunctionalComponent
} from './ht1';

const app = document.getElementById('app');

export function App() {
  ReactDOM.render(
    <div>
      <CreateElement />
      <ReactComponent />
      <ReactPureComponent />
      <ReactPureComponent />
      <ReactPureComponent />
      <FunctionalComponent
        text="This is a functional component!"
      />
    </div>,
    app
  );
}
