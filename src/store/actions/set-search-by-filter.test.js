import {
  SET_SEARCH_BY_FILTER
} from '../action-types';

import { setSearchByFilter } from './set-search-by-filter';

describe('(Actions) setSearchByFilter:', () => {
  it('Should create an action to set search by filter within filter text', () => {
    const filter = 'filter';
    const expectedAction = {
      type: SET_SEARCH_BY_FILTER,
      payload: {
        filter
      }
    };

    expect(setSearchByFilter(filter)).toEqual(expectedAction);
  });
});
