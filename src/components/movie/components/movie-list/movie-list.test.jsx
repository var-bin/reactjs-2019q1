import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './movie-list';
import { Movies } from '../movies';
import { moviesData } from '../../../__mocks__/moviesData';

describe('MovieList component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <div>
        <MovieList />
      </div>
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find(MovieList)).toHaveLength(1);
  });

  it('Should render `Movies` without errors:', () => {
    expect(wrapper.find(MovieList).dive().find(Movies)).toHaveLength(1);
  });

  it('Should render `Movies` with right props:', () => {
    const {
      moviesData: moviesDataProps
    } = wrapper.find(MovieList).dive().find(Movies).props();

    const checkedMovieData = moviesDataProps.filter(movieData => movieData.id === moviesData[0].id);

    expect(checkedMovieData[0]).toEqual(moviesData[0]);
  });
});
