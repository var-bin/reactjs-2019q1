import { createStore } from 'redux';

import { rootReducer } from './root-reducer';
import { enhanceComposeWithDevTools } from './enhance-compose-with-dev-tools';

import {
  SEARCH_BY,
  SORT_BY
} from '../constants';

const initialState = {
  searchByFilter: SEARCH_BY.TITLE,
  sortByFilter: SORT_BY.RELEASE_DATE,
  movies: []
};

export const store = createStore(
  rootReducer,
  initialState,
  enhanceComposeWithDevTools()
);
