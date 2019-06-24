import React from 'react';

import {
  MovieGenre,
  MovieRating,
  MovieReleaseDate
} from 'app-components/movie';

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
        <MovieRating rating={rating} />
        <figure className="image is-2by3">
          <span className="icon is-large">
            <i className="fas fa-spinner fa-pulse" />
          </span>
          <img src={imgPath} alt="Alt text" />
        </figure>
        <MovieReleaseDate releaseDate={releaseDate} />
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
