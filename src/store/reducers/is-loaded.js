import {
  SET_SORT_BY_FILTER,
  SET_SORT_BY_FILTER_DONE,
  RECEIVE_MOVIES,
  REQUEST_MOVIES
} from 'app-store/action-types';

export function isLoaded(state = false, action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
    case SET_SORT_BY_FILTER_DONE:
      return true;
    case REQUEST_MOVIES:
    case SET_SORT_BY_FILTER:
      return false;
    default:
      return state;
  }
}
