import React from 'react';

import { SearchBar } from './search-bar';

export function Header() {
  return (
    <header className="app__header">
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
}
