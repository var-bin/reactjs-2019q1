import {
  SET_SEARCH_MOVIES_VALUE
} from 'app-store/action-types';

export function searchMoviesValue(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_MOVIES_VALUE:
      return action.payload.searchValue;
    default:
      return state;
  }
}
