import React from 'react';

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
    <a href={`#${genre}`} key={`${id}-${genre}`}>
      &nbsp;#
      {genre}
    </a>
  ));

  // Uncomment the line bellow for testing `ErrorBoundary` component
  // throw new Error('Ooops, smth went wrong!!!');

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
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
}
