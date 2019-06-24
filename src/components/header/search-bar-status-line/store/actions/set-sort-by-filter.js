import {
  SET_SORT_BY_FILTER
} from 'app-store/action-types';

export function setSortByFilter(filter) {
  return {
    type: SET_SORT_BY_FILTER,
    payload: {
      filter
    }
  };
}
