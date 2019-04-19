import {
  movies,
  searchByFilter,
  sortByFilter
} from './reducers';

export function rootReducer(state = {}, action) {
  return {
    searchByFilter: searchByFilter(state.searchByFilter, action),
    sortByFilter: sortByFilter(state.sortByFilter, action),
    movies: movies(state.movies, action)
  };
}
