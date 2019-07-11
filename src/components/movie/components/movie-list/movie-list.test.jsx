import React from 'react';
import { shallow } from 'enzyme';

import { moviesData } from 'app-mocks/moviesData';
import { Spinner } from 'app-components/spinner';
import { Movies } from 'app-components/movie';

import { MovieListComponent } from './movie-list';

describe('(Component) MovieList:', () => {
  let wrapper;

  const isFetching = false;
  const onFetchMovies = jest.fn().mockImplementation(() => {
    return moviesData;
  });

  function generateWrapper(passedProps) {
    const defaultProps = {
      onFetchMovies,
      moviesData,
      isFetching
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<MovieListComponent {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  afterEach(() => {
    onFetchMovies.mockClear();
  });

  it('should fetch movies data', () => {
    expect(onFetchMovies).toHaveBeenCalledTimes(1);
    expect(onFetchMovies).toHaveReturnedWith(moviesData);
  });

  it('should render `Spinner` component:', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should render `Movies` component', () => {
    const wrapper = generateWrapper({
      isFetching: true
    });

    expect(wrapper.find(Movies)).toHaveLength(1);
    expect(wrapper.find(Movies).prop('moviesData')).toEqual(moviesData);
  });
});
