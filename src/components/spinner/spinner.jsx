import React from 'react';

import './spinner.scss';

export function Spinner() {
  return (
    <div className="spinner-wrapper">
      <span className="icon is-large">
        <i className="fas fa-spinner fa-pulse" />
      </span>
    </div>
  );
}
