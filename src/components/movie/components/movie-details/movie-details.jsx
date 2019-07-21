import React from 'react';
import { Link } from "react-router-dom";

export function MovieDetailsComponent(props) {
  const {
    movieData: {
      title,
      tagline,
      release_date: releaseDate,
      runtime,
      overview,
      poster_path: imgPath
    }
  } = props;

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <Link to="/">
            Back to search
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <figure className="image is-2by3">
            <span className="icon is-large">
              <i className="fas fa-spinner fa-pulse" />
            </span>
            <img src={imgPath} alt="Movie Poster" />
          </figure>
        </div>
        <div className="column is-three-quarters">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h3 className="title">
                {title}
              </h3>
            </div>
            <div className="column is-12">
              {tagline}
            </div>
            <div className="column is-12">
              <div className="columns">
                <div className="column is-2">
                  {releaseDate}
                </div>
                <div className="column is-2">
                  {runtime} min
                </div>
              </div>
            </div>
            <div className="column is-12">
              {overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
