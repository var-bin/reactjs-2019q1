import React from 'react';

import { SearchBar } from 'app-components/header/search-bar';
import { MovieList } from 'app-components/movie';

export function HomeComponent() {
  return (
    <div className="section">
      <div className="container">
        <SearchBar />
      </div>

      <hr />

      <div className="section">
        <MovieList />
      </div>
    </div>
  );
}
