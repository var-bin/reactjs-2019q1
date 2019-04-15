import React from 'react';
import { shallow } from 'enzyme';

import { MovieGenre } from './movie-genre';

describe('MovieGenre component:', () => {
  let wrapper;
  const genreMock = 'my awesome genre';

  beforeEach(() => {
    wrapper = shallow(
      <div>
        <MovieGenre genre={genreMock} />
      </div>
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find(MovieGenre)).toHaveLength(1);
  });

  it('Should have right props:', () => {
    const { genre } = wrapper.find(MovieGenre).props();

    expect(genre).toEqual(genre);
  });

  it('Should have right text:', () => {
    expect(wrapper.find(MovieGenre).html()).toMatchSnapshot();
  });
});
