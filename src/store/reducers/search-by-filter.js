import {
  SEARCH_BY
} from 'app-constants';

import {
  SET_SEARCH_BY_FILTER
} from 'app-store/action-types';

export function searchByFilter(state = SEARCH_BY.TITLE, action) {
  switch (action.type) {
    case SET_SEARCH_BY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}
