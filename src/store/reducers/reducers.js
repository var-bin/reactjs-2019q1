import {
  SORT_BY,
  SEARCH_BY
} from 'app-constants';

import {
  SET_SORT_BY_FILTER,
  SET_SEARCH_BY_FILTER,
  RECEIVE_MOVIES,
  REQUEST_MOVIES
} from 'app-store/action-types';


export function movies(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.movies.data;
    default:
      return state;
  }
}

export function isFetching(state = false, action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return true;
    case REQUEST_MOVIES:
      return false;
    default:
      return state;
  }
}

export function sortByFilter(state = SORT_BY.RELEASE_DATE, action) {
  switch (action.type) {
    case SET_SORT_BY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}

export function searchByFilter(state = SEARCH_BY.TITLE, action) {
  switch (action.type) {
    case SET_SEARCH_BY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
}
