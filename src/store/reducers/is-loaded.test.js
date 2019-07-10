import {
  SET_SORT_BY_FILTER,
  SET_SORT_BY_FILTER_DONE,
  RECEIVE_MOVIES,
  REQUEST_MOVIES
} from 'app-store/action-types';

import { isLoaded } from './is-loaded';

describe('(Reducer) isLoaded', () => {
  it('should return the initial state', () => {
    const expected = false;

    expect(isLoaded(undefined, {})).toEqual(expected);
  });

  it('should handle `RECEIVE_MOVIES` action', () => {
    const expected = true;

    expect(isLoaded(undefined, {
      type: RECEIVE_MOVIES,
    })).toEqual(expected);
  });

  it('should handle `SET_SORT_BY_FILTER_DONE` action', () => {
    const expected = true;

    expect(isLoaded(undefined, {
      type: SET_SORT_BY_FILTER_DONE,
    })).toEqual(expected);
  });

  it('should handle `REQUEST_MOVIES` action', () => {
    const expected = false;

    expect(isLoaded(undefined, {
      type: REQUEST_MOVIES,
    })).toEqual(expected);
  });

  it('should handle `SET_SORT_BY_FILTER` action', () => {
    const expected = false;

    expect(isLoaded(undefined, {
      type: SET_SORT_BY_FILTER,
    })).toEqual(expected);
  });
});
