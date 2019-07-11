import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { moviesData } from 'app-mocks';
import { fetchMock } from 'app-mocks/fetchMock';

import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_SEARCH_MOVIES_VALUE
} from 'app-store/action-types';

import { searchMovies } from './search-movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('(Actions) searchMovies:', () => {
  const searchValue = 'searchValue';

  it('Should dispatch right actions', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: SET_SEARCH_MOVIES_VALUE },
      { type: REQUEST_MOVIES },
      { type: RECEIVE_MOVIES }
    ];

    return store.dispatch(searchMovies(searchValue))
      .then(() => {
        expect(store.getActions()).toMatchObject(expectedActions);
      });
  });

  it('should fetch search data', () => {
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

    return store.dispatch(searchMovies(searchValue))
      .then((data) => {
        const { payload, type } = data;

        expect(payload.movies).toEqual(expected.movies);
        expect(type).toEqual(RECEIVE_MOVIES);
    })
  });
});
