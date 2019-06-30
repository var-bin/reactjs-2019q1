import {
  SET_SEARCH_MOVIES_VALUE
} from 'app-store/action-types';

import { setSearchMoviesValue } from './set-search-movies-value';

describe('(Actions) setSearchMoviesValue:', () => {
  it('Should create an action to search movies value within searchValue', () => {
    const searchValue = 'searchValue';
    const expectedAction = {
      type: SET_SEARCH_MOVIES_VALUE,
      payload: {
        searchValue
      }
    };

    expect(setSearchMoviesValue(searchValue)).toEqual(expectedAction);
  });
});
