import { createStore } from 'redux';

import { rootReducer } from './reducers';

import { enhanceComposeWithDevTools } from '../enhance-compose-with-dev-tools';

export const store = createStore(
  rootReducer,
  enhanceComposeWithDevTools()
);
