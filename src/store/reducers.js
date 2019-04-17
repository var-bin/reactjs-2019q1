import {
  ADD_MOVIE_TO_FAVORITE,
  REMOVE_MOVIE_FROM_FAVORITE,
  SET_SORT_BY_FILTER,
  SET_SEARCH_BY_FILTER
} from './actions';

import {
  SORT_BY,
  SEARCH_BY
} from '../constants';

export function movies(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITE:
      return state.map((movie) => {
        if (movie.id === action.id) {
          return [
            ...state,
            {
              favorite: true
            }
          ];
        }

        return state;
      });
    case REMOVE_MOVIE_FROM_FAVORITE:
      return state.map((movie) => {
        if (movie.id === action.id) {
          return [
            ...state,
            {
              favorite: false
            }
          ];
        }

        return state;
      });
    default:
      return state;
  }
}

export function sortByFilter(state = SORT_BY.RELEASE_DATE, action) {
  switch (action.type) {
    case SET_SORT_BY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function searchByFilter(state = SEARCH_BY.TITLE, action) {
  switch (action.type) {
    case SET_SEARCH_BY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
