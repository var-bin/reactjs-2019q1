import {
  SEARCH_BY
} from 'app-constants';

import {
  SET_SEARCH_BY_FILTER
} from 'app-store/action-types';

import { searchByFilter } from './search-by-filter';

describe('(Reducer) searchByFilter', () => {
  it('should return the initial state', () => {
    expect(searchByFilter(undefined, {})).toEqual(SEARCH_BY.TITLE);
  });

  it('should handle `SET_SEARCH_BY_FILTER` action', () => {
    const expected = 'filter';

    expect(searchByFilter(undefined, {
      type: SET_SEARCH_BY_FILTER,
      payload: {
        filter: 'filter'
      }
    })).toEqual(expected);
  });
});
