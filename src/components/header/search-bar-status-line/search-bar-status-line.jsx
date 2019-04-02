import React from 'react';

import './search-bar-status-line.styles.scss';

export function SearchBarStatusLine() {
  return (
    <div className="search-bar-status-line has-background-grey-lighter columns is-vcentered">
      <div className="column">
        <p>
          7 movies found
        </p>
      </div>
      <div className="column search-bar-status-line__">
        <div className="columns is-vcentered">
          <div className="column">Search by: </div>
          <div className="column">
            <button type="button" className="button is-primary">
              Release Date
            </button>
          </div>
          <div className="column">
            <button type="button" className="button is-light">
              Rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
