import {
  SET_SEARCH_MOVIES_VALUE
} from 'app-store/action-types';

export function setSearchMoviesValue(searchValue = '') {
  return {
    type: SET_SEARCH_MOVIES_VALUE,
    payload: {
      searchValue
    }
  };
}
