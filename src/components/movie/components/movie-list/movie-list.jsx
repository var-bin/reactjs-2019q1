import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getIsFetching
} from 'app-store/selectors';

import { Movies } from 'app-components/movie';
import { Spinner } from 'app-components/spinner';

import {
  getMovies,

  fetchMovies
} from './store';

export class MovieListComponent extends React.Component {
  componentDidMount() {
    const {
      onFetchMovies
    } = this.props;

    onFetchMovies();
  }

  render() {
    const {
      moviesData,
      isFetching
    } = this.props;

    return (
      <div className="container" data-cy="movie-list">
        <div className="columns is-multiline">
          {
            isFetching
              ? <Movies moviesData={moviesData} />
              : <Spinner />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesData: getMovies(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  onFetchMovies: fetchMovies
};

export const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListComponent);
