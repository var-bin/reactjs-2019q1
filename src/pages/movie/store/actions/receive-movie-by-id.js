import {
  RECEIVE_MOVIE_BY_ID
} from 'app-store/action-types';

export function receiveMovieById(movie) {
  return {
    type: RECEIVE_MOVIE_BY_ID,
    payload: {
      movie,
      receiveAt: Date.now()
    }
  };
}
