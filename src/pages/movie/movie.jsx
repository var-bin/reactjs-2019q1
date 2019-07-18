import React from 'react';

import { MovieDetailsComponent } from 'app-components/movie';

export function MovieComponent({ match }) {
  const {
    params
  } = match;

  console.log('MovieComponent: ', match, params);

  return (
    <div className="section">
      <div className="section">
        <MovieDetailsComponent />
      </div>
    </div>
  );
}
