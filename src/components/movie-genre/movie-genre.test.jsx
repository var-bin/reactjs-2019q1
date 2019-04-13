import React from 'react';
import { shallow } from 'enzyme';

import { MovieGenre } from './movie-genre';

describe('MovieGenre component:', () => {
  let wrapper;
  const genre = 'my awesome genre';

  beforeEach(() => {
    wrapper = shallow(
      <div>
        <MovieGenre genre={genre} />
      </div>
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find(MovieGenre)).toHaveLength(1);
  });

  it('Should have right props:', () => {
    const { genre: localGenre } = wrapper.find(MovieGenre).props();

    expect(localGenre).toEqual(genre);
  });
});
