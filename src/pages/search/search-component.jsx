import React, { useState, useEffect } from 'react';

export function SearchComponent(props) {
  const {
    match: {
      params: {
        searchQuery
      }
    },

    searchBy,
    searchMovies
  } = props;

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    searchMovies(searchQuery, searchBy);
  });

  console.log('SearchComponent: ', searchQuery, props);

  return (
    <div className="section">
      <div className="container">
        <h3>Search page</h3>
      </div>
    </div>
  );
}
