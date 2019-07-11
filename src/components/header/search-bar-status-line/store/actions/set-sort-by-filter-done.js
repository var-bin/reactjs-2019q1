import {
  SET_SORT_BY_FILTER_DONE
} from 'app-store/action-types';

export function setSortByFilterDone(filter) {
  return {
    type: SET_SORT_BY_FILTER_DONE,
    payload: {
      filter
    }
  };
}
