import { combineReducers } from 'redux';

import { isLoaded } from './is-loaded';
import { movies } from './movies';
import { searchByFilter } from './search-by-filter';
import { searchMoviesValue } from './search-movies-value';
import { sortByFilter } from './sort-by-filter';

export const rootReducer = combineReducers({
  sortByFilter,
  isLoaded,
  movies,
  searchByFilter,
  searchMoviesValue
});
