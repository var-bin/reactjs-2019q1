import { combineReducers } from 'redux';

import {
  searchByFilter,
  sortByFilter,
  fetchMovies
} from './reducers';

export const rootReducer = combineReducers({
  searchByFilter,
  sortByFilter,
  movies: fetchMovies
});
