import {
  SET_SEARCH_BY_FILTER
} from '../action-types';

export function setSearchByFilter(filter) {
  return {
    type: SET_SEARCH_BY_FILTER,
    payload: {
      filter
    }
  };
}
