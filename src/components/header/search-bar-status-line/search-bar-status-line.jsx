import React from 'react';
import { connect } from 'react-redux';

import { SORT_BY } from 'app-constants';

import {
  getMovies
} from 'app-components/movie/components/movie-list/store';

import {
  setSortBy,

  getSortByFilter,
  getSearchMoviesValue
} from './store';

import './search-bar-status-line.styles.scss';

export function SearchBarStatusLineComponent(props) {
  const {
    setSortByFilter,
    sortBy,
    foundMovies,
    searchMoviesValue
  } = props;

  const releaseDateClass = sortBy === SORT_BY.RELEASE_DATE
    ? 'is-primary'
    : 'is-light';

  const ratingClass = sortBy === SORT_BY.RATING
    ? 'is-primary'
    : 'is-light';

  const isSearchMoviesValueExisted = searchMoviesValue !== '';

  const getMoviesFound = () => {
    if (isSearchMoviesValueExisted) {
      return foundMovies.length;
    }
  }

  const movieMoviesWords = () => {
    if (getMoviesFound() > 1) {
      return 'movies found';
    }

    return 'movie found';
  }

  const renderfoundMoviesInfo = () => {
    if (isSearchMoviesValueExisted) {
      return (
        <div className="column">
          <p>
            {getMoviesFound()}
            &nbsp;
            {movieMoviesWords()}
          </p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="search-bar-status-line has-background-grey-lighter columns is-vcentered">
      {renderfoundMoviesInfo()}
      <div className="column search-bar-status-line__sort-by">
        <div className="columns is-vcentered">
          <div className="column is-narrow search-bar-status-line__sort-by-title">Sort by: </div>
          <div className="column is-narrow">
            <button
              type="button"
              className={`button ${releaseDateClass}`}
              onClick={() => setSortByFilter(SORT_BY.RELEASE_DATE)}
            >
              Release Date
            </button>
          </div>
          <div className="column is-narrow">
            <button
              type="button"
              className={`button ${ratingClass}`}
              onClick={() => setSortByFilter(SORT_BY.RATING)}
            >
              Rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  sortBy: getSortByFilter(state),
  searchMoviesValue: getSearchMoviesValue(state),
  foundMovies: getMovies(state)
});

const mapDispatchToProps = {
  setSortByFilter: setSortBy
};

export const SearchBarStatusLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarStatusLineComponent);
