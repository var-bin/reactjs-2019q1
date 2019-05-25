import {
  SET_SEARCH_BY_FILTER,
  ADD_MOVIE_TO_FAVORITE,
  REMOVE_MOVIE_FROM_FAVORITE,
} from '../action-types';

/*
 * action creators
 */

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
