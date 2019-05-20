import { createStore } from 'redux';

import {
  reducer,
  reducer1,
  rootReducer
} from './reducers';

import { enhanceComposeWithDevTools } from '../enhance-compose-with-dev-tools';

export const store = createStore(
  rootReducer,
  enhanceComposeWithDevTools()
);
