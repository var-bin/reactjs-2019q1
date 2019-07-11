import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'app-store/store';

import 'app-assets/styles.scss';

import App from './src/App';

const root = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
