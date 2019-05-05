import { createStore } from 'redux';

import {
  reducer
} from './reducers';

import { enhanceComposeWithDevTools } from '../enhance-compose-with-dev-tools';

export const store = createStore(
  reducer,
  enhanceComposeWithDevTools()
);
