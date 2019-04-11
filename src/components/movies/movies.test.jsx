import React from 'react';
import { shallow } from 'enzyme';

import { MovieTile } from '../movie-tile';
import { Movies } from './movies';

const mockedMoviesData = [{
  id: 348350,
  title: 'Solo: A Star Wars Story',
  tagline: '',
  vote_average: 0,
  vote_count: 2,
  release_date: '2018-05-23',
  poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
  overview: 'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
  budget: 0,
  revenue: 0,
  genres: [
    'Action',
    'Adventure',
    'Family',
    'Science Fiction'
  ]
}];

describe('Movies component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Movies moviesData={mockedMoviesData} />
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.column')).toHaveLength(1);
  });

  it('Should render one `MovieTile` without errors:', () => {
    expect(wrapper.find(MovieTile)).toHaveLength(1);
  });

  describe('`MovieTile` component:', () => {
    it('Should have prop `movieData`:', () => {
      const { movieData } = wrapper.find(MovieTile).props();

      expect(movieData).toBeTruthy();
    });

    it('Prop `movieData` should be equal `mockedMoviesData`:', () => {
      const { movieData } = wrapper.find(MovieTile).props();

      expect(movieData).toEqual(mockedMoviesData[0]);
    });
  });
});
