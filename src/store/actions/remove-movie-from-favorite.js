import {
  REMOVE_MOVIE_FROM_FAVORITE
} from '../action-types';

export function removeMovieFromFavorite(movieId) {
  return {
    type: REMOVE_MOVIE_FROM_FAVORITE,
    payload: {
      movieId
    }
  };
}
