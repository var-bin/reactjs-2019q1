import React from 'react';

import './movie-release-date.scss';

export function MovieReleaseDate(props) {
  const {
    releaseDate
  } = props;

  return (
    <div className="movie-release">
      <time
        className="tag is-link"
        dateTime={releaseDate}
        title="Release date"
      >
        <span className="icon">
          <i className="fas fa-calendar"></i>
        </span>
        <span
          className="movie-release__date"
          data-ut-id="movieReleaseDate"
        >
          {releaseDate}
        </span>
      </time>
    </div>
  );
}
