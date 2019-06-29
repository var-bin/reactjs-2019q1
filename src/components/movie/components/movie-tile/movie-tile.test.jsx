import React from 'react';
import { shallow } from 'enzyme';

import { moviesData } from 'app-mocks';

import { MovieTile } from './movie-tile';

import {
  MovieRating
} from '../movie-rating';

import {
  MovieReleaseDate
} from '../movie-release-date';

import {
  MovieGenre,
} from '../movie-genre';

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

  it('Should pass right props to `MovieGenre`:', () => {
    wrapper.find('MovieGenres')
      .dive()
      .find(MovieGenre)
      .map((movieGenre, movieGenreIndex) => {
        const { genre } = movieGenre.props();

        expect(genre).toEqual(moviesData[0].genres[movieGenreIndex]);
      });
  });

  it('Should render `MovieRating` without errors:', () => {
    expect(wrapper.find(MovieRating)).toHaveLength(1);
  });

  it('Should pass right props to `MovieRating`:', () => {
    const { rating } = wrapper.find(MovieRating).props();

    expect(rating).toEqual(moviesData[0].vote_count);
  });

  it('Should render `MovieReleaseDate` without errors:', () => {
    expect(wrapper.find(MovieReleaseDate)).toHaveLength(1);
  });

  it('Should pass right props to `MovieReleaseDate`:', () => {
    const { releaseDate } = wrapper.find(MovieReleaseDate).props();

    expect(releaseDate).toEqual(moviesData[0].release_date);
  });
});
