import {
  RECEIVE_MOVIES
} from 'app-store/action-types';

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: {
      movies,
      receiveAt: Date.now()
    }
  };
}
