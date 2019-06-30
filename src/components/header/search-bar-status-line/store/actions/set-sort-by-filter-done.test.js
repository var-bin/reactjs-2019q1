import {
  SET_SORT_BY_FILTER_DONE
} from 'app-store/action-types';

import { setSortByFilterDone } from './set-sort-by-filter-done';

describe('(Actions) setSortByFilterDone:', () => {
  it('Should create an action to set sort by filter done within filter text', () => {
    const filter = 'filter';
    const expectedAction = {
      type: SET_SORT_BY_FILTER_DONE,
      payload: {
        filter
      }
    };

    expect(setSortByFilterDone(filter)).toEqual(expectedAction);
  });
});
