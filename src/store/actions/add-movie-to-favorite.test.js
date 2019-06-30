import {
  ADD_MOVIE_TO_FAVORITE
} from '../action-types';

import { addMovieToFavorite } from './add-movie-to-favorite';

describe('(Actions) addMovieToFavorite:', () => {
  it('Should create an action to add movie to favorite within movieId', () => {
    const movieId = 'movieId';
    const expectedAction = {
      type: ADD_MOVIE_TO_FAVORITE,
      payload: {
        movieId
      }
    };

    expect(addMovieToFavorite(movieId)).toEqual(expectedAction);
  });
});
