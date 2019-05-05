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
  movies: [{
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    overview: 'The third film based on Marvel\'s Guardians of the Galaxy.',
    budget: 0,
    revenue: 0,
    genres: [
      'Action',
      'Adventure',
      'Science Fiction'
    ]
  }],
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
