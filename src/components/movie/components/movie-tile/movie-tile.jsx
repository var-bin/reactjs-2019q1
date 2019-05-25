import React from 'react';

import { MovieGenre } from 'app-components/movie';

import './movie-tile.scss';

export const MovieTile = (props) => {
  const {
    movieData: {
      id,
      title,
      poster_path: imgPath,
      release_date: releaseDate,
      genres
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
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by3">
          <span className="icon is-large">
            <i className="fas fa-spinner fa-pulse" />
          </span>
          <img src={imgPath} alt="Alt text" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h5>
            {title}
          </h5>
          <div>
            <MovieGenres />
          </div>
          <time dateTime={releaseDate}>
            {releaseDate}
          </time>
        </div>
      </div>
    </div>
  );
};
