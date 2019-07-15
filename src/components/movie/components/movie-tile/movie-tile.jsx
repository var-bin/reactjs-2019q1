import React from 'react';
import { Link } from "react-router-dom";

import {
  MovieGenre,
} from '../movie-genre';

import {
  MovieRating
} from '../movie-rating';

import {
  MovieReleaseDate
} from '../movie-release-date';

import './movie-tile.scss';

export const MovieTile = (props) => {
  const {
    movieData: {
      id,
      title,
      poster_path: imgPath,
      release_date: releaseDate,
      genres,
      vote_count: rating
    }
  } = props;

  const MovieGenres = () => genres.map(genre => (
    <MovieGenre
      genre={genre}
      key={`${id}-${genre}`}
    />
  ));

  // Uncomment the line bellow for testing `ErrorBoundary` component
  // throw new Error('Ooops, smth went wrong!!!');

  return (
    <div className="card movie-tile">
      <div className="card-image">
        <Link to={`/movie/${id}`}>
          <div className="card-header">
            <div className="columns is-mobile is-multiline">
              <div className="column">
                <MovieReleaseDate releaseDate={releaseDate} />
              </div>
              <div className="column">
                <MovieRating rating={rating} />
              </div>
            </div>
          </div>
          <figure className="image is-2by3">
            <span className="icon is-large">
              <i className="fas fa-spinner fa-pulse" />
            </span>
            <img src={imgPath} alt="Alt text" />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="content">
          <h5>
            {title}
          </h5>
          <div>
            <MovieGenres />
          </div>
        </div>
      </div>
    </div>
  );
};
