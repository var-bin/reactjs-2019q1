import {
  MOVIES_API
} from 'app-constants';

import {
  receiveMovies
} from './receive-movies';

import {
  requestMovies
} from './request-movies';

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
