import { combineReducers } from 'redux';

import {
  searchByFilter,
  sortByFilter,
  fetchMovies
} from './reducers';

/* export function rootReducer(state = initialState, action) {
  return {
    searchByFilter,
    sortByFilter,
    movies: fetchMovies
  };
} */

export const rootReducer = combineReducers({
  searchByFilter,
  sortByFilter,
  movies: fetchMovies
});
