import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Movies } from '../movies';
import { Spinner } from '../spinner';

import { fetchMovies } from '../../store/actions';

import {
  getMovies,
  getIsFetching
} from '../../store/selectors';

class MovieListComponent extends Component {
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
