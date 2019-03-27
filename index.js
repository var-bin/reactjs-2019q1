import React from 'react';
import { render } from 'react-dom';

import App from './src/App';

import './src/assets/styles.scss';

const root = document.getElementById('app');

render(<App />, root);

// if (module.hot) {
//   module.hot.accept();
// }
