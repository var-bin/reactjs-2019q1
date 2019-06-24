import React from 'react';
import { shallow } from 'enzyme';

import {
  MovieListComponent,
} from './movie-list';

import { moviesData } from 'app-mocks';

describe('MovieList component:', () => {
  let wrapper;

  const onFetchMovies = jest.fn();
  const isFetching = false;

  function generateWrapper(passedProps) {
    const defaultProps = {
      onFetchMovies,
      moviesData,
      isFetching
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<MovieListComponent {...props} />);
  }

  xit('Should render without errors:', () => {
    const wrapper = generateWrapper();

    console.log(wrapper.find(MovieListComponent).html());
  });
});
