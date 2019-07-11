import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { moviesData } from 'app-mocks';
import { fetchMock } from 'app-mocks/fetchMock';

import {
  RECEIVE_MOVIES,
  REQUEST_MOVIES
} from 'app-store/action-types';

import { fetchMovies } from './fetch-movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('(Actions) fetchMovies:', () => {
  it('Should dispatch right actions', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: REQUEST_MOVIES },
      { type: RECEIVE_MOVIES }
    ];

    return store.dispatch(fetchMovies())
      .then(() => {
        expect(store.getActions()).toMatchObject(expectedActions);
      });
  });

  it('should fetch movies data', () => {
    const expected = {
      movies: moviesData
    };

    const resolveJson = {
      json: () => moviesData
    };

    fetchMock(Promise.resolve(resolveJson));

    const store = mockStore({
      movies: []
    });

    return store.dispatch(fetchMovies())
      .then((data) => {
        const { payload, type } = data;

        expect(payload.movies).toEqual(expected.movies);
        expect(type).toEqual(RECEIVE_MOVIES);
      })
  });
});
