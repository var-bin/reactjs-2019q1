import React from 'react';

import { Redirect } from "react-router-dom";

import { MovieDetailsComponent } from 'app-components/movie';

export function MovieComponent({ match }) {
  console.log('MovieComponent: ', match);

  return (
    <div className="section">
      <div className="section">
        <MovieDetailsComponent />
      </div>
    </div>
  );
}
