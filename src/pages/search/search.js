import { connect } from 'react-redux';

import { SearchComponent } from './search-component';

import {
  getSearchByFilter,

  searchMovies,
} from 'app-components/header/search-bar/store';

const mapStateToProps = state => ({
  searchBy: getSearchByFilter(state)
});

const mapDispatchToProps = {
  searchMovies
};

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
