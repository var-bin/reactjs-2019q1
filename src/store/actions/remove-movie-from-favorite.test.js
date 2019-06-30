import {
  REMOVE_MOVIE_FROM_FAVORITE
} from '../action-types';

import { removeMovieFromFavorite } from './remove-movie-from-favorite';

describe('(Actions) addMovieToFavorite:', () => {
  it('Should create an action to remove movie from favorite within movieId', () => {
    const movieId = 'movieId';
    const expectedAction = {
      type: REMOVE_MOVIE_FROM_FAVORITE,
      payload: {
        movieId
      }
    };

    expect(removeMovieFromFavorite(movieId)).toEqual(expectedAction);
  });
});
