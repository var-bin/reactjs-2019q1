import React from 'react';

import './movie-rating.scss';

export function MovieRating(props) {
  const {
    rating
  } = props;

  return (
    <div className="movie-rating has-text-info is-size-4" title="Movie rating">
      <span className="icon">
        <i className="fas fa-star"></i>
      </span>
      <span className="movie-rating__count">
        {rating}
      </span>
    </div>
  );
}
