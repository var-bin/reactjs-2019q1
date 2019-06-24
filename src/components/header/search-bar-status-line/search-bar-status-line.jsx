import React from 'react';
import { connect } from 'react-redux';

import { SORT_BY } from 'app-constants';

import {
  setSortBy,

  getSortByFilter
} from './store';

import './search-bar-status-line.styles.scss';

export function SearchBarStatusLineComponent(props) {
  const {
    setSortByFilter,
    sortBy
  } = props;

  const releaseDateClass = sortBy === SORT_BY.RELEASE_DATE
    ? 'is-primary'
    : 'is-light';

  const ratingClass = sortBy === SORT_BY.RATING
    ? 'is-primary'
    : 'is-light';

  return (
    <div className="search-bar-status-line has-background-grey-lighter columns is-vcentered">
      <div className="column">
        <p>
          {'0'}
          &nbsp;
          movies found
        </p>
      </div>
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
  sortBy: getSortByFilter(state)
});

const mapDispatchToProps = {
  setSortByFilter: setSortBy
};

export const SearchBarStatusLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarStatusLineComponent);
