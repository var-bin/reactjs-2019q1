import { combineReducers } from 'redux';

import {
  sortByFilter,
  movies,
  isLoaded,
  searchByFilter,
  searchMoviesValue
} from './reducers';

export const rootReducer = combineReducers({
  sortByFilter,
  isLoaded,
  movies,
  searchByFilter,
  searchMoviesValue
});
