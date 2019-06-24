import React from 'react';
import { shallow } from 'enzyme';

import { MovieTile } from './movie-tile';
import { moviesData } from 'app-mocks';

describe('MovieTile component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieTile movieData={moviesData[0]} />);
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.card')).toHaveLength(1);
  });

  it('Should render `MovieGenres` without errors:', () => {
    const movieGenres = wrapper
      .find('MovieGenres')
      .length;

    expect(movieGenres).toBeGreaterThan(0);
  });
});
