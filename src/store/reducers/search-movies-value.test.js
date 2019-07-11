import {
  SET_SEARCH_MOVIES_VALUE
} from 'app-store/action-types';

import { searchMoviesValue } from './search-movies-value';

describe('(Reducer) searchMoviesValue', () => {
  it('should return the initial state', () => {
    expect(searchMoviesValue('', {})).toEqual('');
  });

  it('should handle `SET_SEARCH_MOVIES_VALUE` action', () => {
    const expected = 'searchValue';

    expect(searchMoviesValue('', {
      type: SET_SEARCH_MOVIES_VALUE,
      payload: {
        searchValue: 'searchValue'
      }
    })).toEqual(expected);
  });
});
