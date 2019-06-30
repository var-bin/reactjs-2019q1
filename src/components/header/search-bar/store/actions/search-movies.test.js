import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  MOVIES_API,
  SEARCH_BY
} from 'app-constants';

import {
  receiveMovies,
  requestMovies
} from 'app-components/movie/components/movie-list/store';

import { setSearchMoviesValue } from './set-search-movies-value';

import { searchMovies } from './search-movies';

describe('(Actions) searchMovies:', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('Should dispatch `setSearchMoviesValue` action with ritght props', () => {
    const store = mockStore({});
    const searchValue = 'searchValue';

    // Return the promise
    return store.dispatch(searchMovies(searchValue))
      .then(() => {
        const actions = store.getActions();

        console.log('actions: ', actions);

        // expect(actions[0]).toEqual(setSearchMoviesValue(searchValue));
      });
  });
});
