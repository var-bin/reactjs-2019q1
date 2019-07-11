import React from 'react';
import { shallow } from 'enzyme';

import { Movies } from './movies';
import { MovieTile } from '../movie-tile';
import { moviesData } from 'app-mocks';

describe('Movies component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Movies moviesData={moviesData} />
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.column')).toHaveLength(1);
  });

  it('Should render `MovieTile` without errors:', () => {
    expect(wrapper.find(MovieTile)).toHaveLength(1);
  });

  describe('`MovieTile` component:', () => {
    it('Should have the right value for prop `movieData`:', () => {
      const { movieData } = wrapper.find(MovieTile).props();

      expect(movieData).toEqual(moviesData[0]);
    });
  });
});
