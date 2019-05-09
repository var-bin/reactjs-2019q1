import {
  SET_SORT_BY_FILTER,
  REQUEST_MOVIES,
  RECEIVE_MOVIES
} from '../actions';

import {
  SEARCH_BY,
  SORT_BY
} from '../../constants';

const initialState = {
  searchByFilter: SEARCH_BY.TITLE,
  sortByFilter: SORT_BY.RELEASE_DATE,
  movies: [],
  isFetching: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_BY_FILTER:
      return {
        ...state,
        sortByFilter: action.payload.filter
      };
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: false
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: true,
        movies: action.payload.movies.data,
        lastUpdated: action.payload.receiveAt
      };
    default:
      return state;
  }
}
