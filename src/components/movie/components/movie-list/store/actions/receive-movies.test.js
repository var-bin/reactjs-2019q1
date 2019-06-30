import {
  RECEIVE_MOVIES
} from 'app-store/action-types';

import {
  moviesData
} from 'app-mocks';

import { receiveMovies } from './receive-movies';

describe('(Actions) receiveMovies:', () => {
  it('Should create an action to receive movies within movies and receiveAt', () => {
    const receiveMoviesResult = receiveMovies(moviesData);

    const expectedAction = {
      type: RECEIVE_MOVIES,
      payload: {
        movies: moviesData,
        receiveAt: receiveMoviesResult.payload.receiveAt
      }
    };

    expect(receiveMoviesResult).toEqual(expectedAction);
  });
});
