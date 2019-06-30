import {
  SET_SORT_BY_FILTER_DONE
} from 'app-store/action-types';

export function sortByFilter(state = '', action) {
  switch (action.type) {
    case SET_SORT_BY_FILTER_DONE:
      return action.payload.filter;
    default:
      return state;
  }
}
