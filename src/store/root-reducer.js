import {
  movies,
  searchByFilter,
  sortByFilter,
  fetchMovies
} from './reducers';

export function rootReducer(state = {}, action) {
  return {
    searchByFilter: searchByFilter(state.searchByFilter, action),
    sortByFilter: sortByFilter(state.sortByFilter, action),
    movies: fetchMovies(state, action)
  };
}
