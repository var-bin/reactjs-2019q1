import React from 'react';

export const MovieGenre = (props) => {
  const {
    genre
  } = props;

  return (
    <a href={`#${genre}`} className="is-inline-block">
      &nbsp;#
      {genre}
    </a>
  );
};
