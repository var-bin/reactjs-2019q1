import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setSortByFilter } from '../../../store/actions';
import { getSortByFilter } from '../../../store/selectors';

import { SORT_BY } from '../../../constants';

import './search-bar-status-line.styles.scss';

function SearchBarStatusLineComponent(props) {
  const {
    setSortBy,
    sortBy
  } = props;

  /* const [sortBy, setSortBy] = useState(SORT_BY.RELEASE_DATE);
  const [moviesFound, setMoviesFound] = useState(0); */

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
      <div className="column search-bar-status-line__">
        <div className="columns is-vcentered">
          <div className="column">Sort by: </div>
          <div className="column">
            <button type="button" className={`button ${releaseDateClass}`} onClick={() => setSortBy(SORT_BY.RELEASE_DATE)}>
              Release Date
            </button>
          </div>
          <div className="column">
            <button type="button" className={`button ${ratingClass}`} onClick={() => setSortBy(SORT_BY.RATING)}>
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
  setSortBy: setSortByFilter
};

export const SearchBarStatusLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarStatusLineComponent);
