import React from 'react';

import './search-bar-status-line.styles.scss';

export function SearchBarStatusLine() {
  return (
    <div className="search-bar-status-line has-background-grey-lighter columns">
      <div className="column">
        <div className="level-item">
          <p>
            7 movies found
          </p>
        </div>
      </div>
      <div className="column">
        <div className="level-item">
          Search by: Release Date/Rating
        </div>
      </div>
    </div>
  );
}
