/*
 * action types
 */

export const SET_SORT_BY_FILTER = 'SET_SORT_BY_FILTER';
export const SET_SEARCH_BY_FILTER = 'SET_SEARCH_BY_FILTER';
export const ADD_MOVIE_TO_FAVORITE = 'ADD_MOVIE_TO_FAVORITE';
export const REMOVE_MOVIE_FROM_FAVORITE = 'REMOVE_MOVIE_FROM_FAVORITE';

/*
 * action creators
 */

export function setSortByFilter(filter) {
  return {
    type: SET_SORT_BY_FILTER,
    payload: {
      filter
    }
  };
}

export function setSearchByFilter(filter) {
  return {
    type: SET_SEARCH_BY_FILTER,
    payload: {
      filter
    }
  };
}

export function addMovieToFavorite(movieId) {
  return {
    type: ADD_MOVIE_TO_FAVORITE,
    payload: {
      movieId
    }
  };
}

export function removeMovieFromFavorite(movieId) {
  return {
    type: REMOVE_MOVIE_FROM_FAVORITE,
    payload: {
      movieId
    }
  };
}
