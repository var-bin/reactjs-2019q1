import React, { Component, Fragment } from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import { MovieTile } from '../movie-tile';
import { MovieComponent } from 'app-pages';

export class Movies extends Component {
  render() {
    const {
      moviesData,
      match
    } = this.props;

    return (
      <Fragment>
        {
          moviesData.map(movieData => (
            <div className="column is-one-quarter" key={movieData.id}>
              <MovieTile movieData={movieData} match={match} />
            </div>
          ))
        }
      </Fragment>
    );
  }
}
