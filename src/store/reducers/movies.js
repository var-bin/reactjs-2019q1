import {
  SORT_BY,
} from 'app-constants';

import {
  SET_SORT_BY_FILTER_DONE,
  RECEIVE_MOVIES
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
