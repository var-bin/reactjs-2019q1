import fetch from 'cross-fetch';

import {
  MOVIES_API,
  SEARCH_BY
} from 'app-constants';

import {
  receiveMovies,
  requestMovies
} from 'app-components/movie/components/movie-list/store';

import { setSearchMoviesValue } from './set-search-movies-value';

export function searchMovies(searchValue, searchBy = SEARCH_BY.TITLE) {
  return function (dispatch) {
    dispatch(setSearchMoviesValue(searchValue));
    dispatch(requestMovies());

    return fetch(`${MOVIES_API}/movies?search=${searchValue}&searchBy=${searchBy}`)
      .then(
        response => response.json(),
        error => console.error('An error occurred.', error)
      )
      .then(json => dispatch(receiveMovies(json)));
  };
}
