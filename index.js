import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './src/App';
import { store } from './src/store';

import './src/assets/styles.scss';

const root = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
