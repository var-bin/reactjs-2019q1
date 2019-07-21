import { connect } from 'react-redux';

import { MovieComponent } from './movie-component';

import {
  getMovieTitleById,

  fetchMovieById
} from './store';

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: {
        movieId
      }
    }
  } = ownProps;

  return {
    movieTitle: getMovieTitleById(state, movieId)
  };
};

const mapDispatchToProps = {
  fetchMovieById
};

export const MovieInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieComponent);
