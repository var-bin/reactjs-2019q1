import {
  SET_SORT_BY_FILTER_DONE
} from 'app-store/action-types';

import { sortByFilter } from './sort-by-filter';

describe('(Reducer) sortByFilter', () => {
  it('should return the initial state', () => {
    expect(sortByFilter('', {})).toEqual('');
  });

  it('should handle `SET_SORT_BY_FILTER_DONE` action', () => {
    const expected = 'filter';

    expect(sortByFilter('', {
      type: SET_SORT_BY_FILTER_DONE,
      payload: {
        filter: 'filter'
      }
    })).toEqual(expected);
  });
});
