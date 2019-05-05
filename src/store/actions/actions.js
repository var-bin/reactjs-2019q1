import fetch from 'cross-fetch';

import {
  MOVIES_API
} from '../../constants';

/*
 * action types
 */

export const SET_SORT_BY_FILTER = 'SET_SORT_BY_FILTER';
export const SET_SEARCH_BY_FILTER = 'SET_SEARCH_BY_FILTER';
export const ADD_MOVIE_TO_FAVORITE = 'ADD_MOVIE_TO_FAVORITE';
export const REMOVE_MOVIE_FROM_FAVORITE = 'REMOVE_MOVIE_FROM_FAVORITE';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

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

export function setSortByFilterAsync(filter) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setSortByFilter(filter));
    }, 2000);
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

export function requestMovies() {
  return {
    type: REQUEST_MOVIES
  };
}

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: {
      movies,
      receiveAt: Date.now()
    }
  };
}

export function fetchMovies() {
  return function (dispatch) {
    dispatch(requestMovies());

    // replace API
    return fetch(`${MOVIES_API}/movies`)
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error)
      )
      .then(json => dispatch(receiveMovies(json)));
  };
}
