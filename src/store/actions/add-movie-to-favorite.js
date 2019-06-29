import {
  ADD_MOVIE_TO_FAVORITE
} from '../action-types';

export function addMovieToFavorite(movieId) {
  return {
    type: ADD_MOVIE_TO_FAVORITE,
    payload: {
      movieId
    }
  };
}
