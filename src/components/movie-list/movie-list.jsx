import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Movies } from '../movies';

import { fetchMovies } from '../../store/actions';

class MovieListComponent extends Component {
  componentDidMount() {
    const {
      dispatch
    } = this.props;

    dispatch(fetchMovies());
  }

  render() {
    const {
      moviesData
    } = this.props;
    return (
      <div className="container" data-cy="movie-list">
        <div className="columns is-multiline">
          <Movies moviesData={moviesData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesData: state.movies
  };
};

export const MovieList = connect(
  mapStateToProps
)(MovieListComponent);
