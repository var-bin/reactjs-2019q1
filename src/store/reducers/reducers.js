import {
  SORT_BY,
  SEARCH_BY
} from 'app-constants';

import {
  SET_SORT_BY_FILTER,
  SET_SORT_BY_FILTER_DONE,
  SET_SEARCH_BY_FILTER,
  RECEIVE_MOVIES,
  REQUEST_MOVIES
} from 'app-store/action-types';

const sortByVoteCount = (itemA, itemB) => {
  if (itemB.vote_count > itemA.vote_count) {
    return 1;
  }

  return -1;
}

const sortByReleaseDate = (itemA, itemB) => {
  const releaseDateA = Number(itemA.release_date.replace(/-/g, ''));
  const releaseDateB = Number(itemB.release_date.replace(/-/g, ''));

  if (releaseDateB < releaseDateA) {
    return -1;
  }

  return 1;
}

export function movies(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.movies.data;
    case SET_SORT_BY_FILTER_DONE:
      const { filter } = action.payload;

      return filter === SORT_BY.RELEASE_DATE
        ? [...state].sort(sortByReleaseDate)
        : [...state].sort(sortByVoteCount);
    default:
      return state;
  }
}

export function isFetching(state = false, action) {
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

export function sortByFilter(state = '', action) {
  switch (action.type) {
    case SET_SORT_BY_FILTER_DONE:
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
