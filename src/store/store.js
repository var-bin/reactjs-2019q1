import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  SEARCH_BY,
  SORT_BY
} from '../constants';

import { rootReducer } from './rootReducer';

const CONSTANTS = require('../../buildTools/constants');

const initialState = {
  searchByFilter: SEARCH_BY.TITLE,
  sortByFilter: SORT_BY.RELEASE_DATE,
  movies: []
};

// for redux dev tools in dev mode
function enhanceComposeWithDevTools() {
  if (CONSTANTS.NODE_ENV !== CONSTANTS.PRODUCTION_MODE) {
    return composeWithDevTools(applyMiddleware());
  }

  return null;
}

export const store = createStore(
  rootReducer,
  initialState,
  enhanceComposeWithDevTools()
);
