// because of jest errors
import 'cross-fetch/polyfill';

import { MOVIES_API } from 'app-constants';

import { receiveMovieById } from './receive-movie-by-id';

export function fetchMovieById(movieId) {
  return function (dispatch) {
    return fetch(`${MOVIES_API}/movies/${movieId}`)
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error)
      );
  };
}
