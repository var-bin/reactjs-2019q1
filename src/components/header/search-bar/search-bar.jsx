import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SEARCH_BY } from 'app-constants';

import { setSearchByFilter } from 'app-store/actions';

import { SearchBarStatusLine } from '../search-bar-status-line';

import './search-bar.styles.scss';

export function SearchBarComponent(props) {
  const {
    setSearchBy,
    searchBy
  } = props;

  const [searchValue, setSearchValue] = useState('');

  const titleClass = searchBy === SEARCH_BY.TITLE
    ? 'is-primary'
    : 'is-light';

  const genreClass = searchBy === SEARCH_BY.GENRE
    ? 'is-primary'
    : 'is-light';

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('handleOnSubmit: ', searchValue, searchBy);

    setSearchValue('');
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const disableSearchButton = () => {
    return searchValue === '';
  };

  return (
    <div className="app__header-search-bar columns is-multiline">
      <div className="column is-12">
        <h3 className="title is-uppercase">
          find your movie
        </h3>
      </div>
      <div className="column is-12">
        <form className="app__header-search-bar-form">
          <div className="columns is-multiline">
            <div className="column is-10">
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    onChange={handleChange}
                    value={searchValue}
                  />
                </div>
              </div>
            </div>
            <div className="column is-2">
              <div className="control app__header-search-bar-form-button">
                <button
                  type="submit"
                  className="button is-success is-uppercase"
                  onClick={handleSubmit}
                  disabled={disableSearchButton()}
                >
                  search
                </button>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column">
              <div className="field is-grouped">
                <div className="control app__header-search-by">
                  <h5 className="title is-6 is-uppercase">search by</h5>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className={`button is-uppercase ${titleClass}`}
                    onClick={() => setSearchBy(SEARCH_BY.TITLE)}
                  >
                    title
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className={`button is-uppercase ${genreClass}`}
                    onClick={() => setSearchBy(SEARCH_BY.GENRE)}
                  >
                    genre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="column">
        <SearchBarStatusLine />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  searchBy: state.searchByFilter
});

const mapDispatchToProps = {
  setSearchBy: setSearchByFilter
};

export const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarComponent);
