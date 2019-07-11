import React from 'react';

import './movie-rating.scss';

export function MovieRating(props) {
  const {
    rating
  } = props;

  return (
    <div className="movie-rating" title="Movie rating">
      <div className="tag is-link">
        <span className="icon">
          <i className="fas fa-star"></i>
        </span>
        <span
          className="movie-rating__count"
          data-ut-id="movieRatingCount"
        >
          {rating}
        </span>
      </div>
    </div>
  );
}
