import React, { Component } from 'react';

import { MovieTile } from '../movie-tile';

export class Movies extends Component {
  render() {
    const {
      moviesData
    } = this.props;

    return moviesData.map(movieData => (
      <div className="column is-one-quarter" key={movieData.id}>
        <MovieTile movieData={movieData} />
      </div>
    ));
  }
}
