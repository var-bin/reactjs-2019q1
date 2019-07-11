import {
  SET_SORT_BY_FILTER
} from 'app-store/action-types';

import { setSortByFilter } from './set-sort-by-filter';

describe('(Actions) setSortByFilter:', () => {
  it('Should create an action to set sort by filter', () => {
    const expectedAction = {
      type: SET_SORT_BY_FILTER,
    };

    expect(setSortByFilter()).toEqual(expectedAction);
  });
});
