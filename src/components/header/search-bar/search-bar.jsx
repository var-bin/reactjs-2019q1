import React from 'react';
import { connect } from 'react-redux';

import { setSearchByFilter } from '../../../store/actions';

import { SearchBarStatusLine } from '../search-bar-status-line';

import './search-bar.styles.scss';

export function SearchBarComponent(props) {
  return (
    <div className="app__header-search-bar columns is-multiline">
      <div className="column is-12">
        <h3 className="title is-uppercase">
          find your movie
        </h3>
      </div>
      <div className="column is-12">
        <form className="app__header-search-bar-form">
          <div className="field">
            <div className="control">
              <input type="text" className="input" />
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column">
              <div className="field is-grouped">
                <div className="control app__header-search-by">
                  <h5 className="title is-6 is-uppercase">search by</h5>
                </div>
                <div className="control">
                  <button type="button" className="button is-primary is-uppercase">
                    title
                  </button>
                </div>
                <div className="control">
                  <button type="button" className="button is-light is-uppercase">
                    genre
                  </button>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter">
              <div className="control">
                <button type="button" className="button is-primary is-uppercase">
                  search
                </button>
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
