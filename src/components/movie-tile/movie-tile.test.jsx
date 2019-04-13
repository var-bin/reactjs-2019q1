import React from 'react';
import { shallow } from 'enzyme';

import { MovieTile } from './movie-tile';
import { moviesData } from '../../../__mocks__/moviesData';

describe('MovieTile component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <div>
        <MovieTile movieData={moviesData[0]} />
      </div>
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find(MovieTile)).toHaveLength(1);
  });

  it('Should render `MovieGenres` without errors:', () => {
    const movieGenres = wrapper
      .find(MovieTile)
      .dive()
      .find('MovieGenres')
      .length;

    expect(movieGenres).toBeGreaterThan(0);
  });

  it('Should render `MovieGenre` without errors:', () => {
    const movieGenres = wrapper
      .find(MovieTile)
      .dive()
      .find('MovieGenres')
      .dive()
      .length;

    expect(movieGenres).toBeGreaterThan(0);
  });
});
