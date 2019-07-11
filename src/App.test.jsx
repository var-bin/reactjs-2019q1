import React from 'react';
import { shallow } from 'enzyme';

import {
  MovieList
} from 'app-components/movie';

import {
  Header,
  ErrorBoundary
} from 'app-components';

import App from './App';

describe('App component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('Should render `Header` without errors:', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('Should render `MovieList` without errors:', () => {
    expect(wrapper.find(MovieList)).toHaveLength(1);
  });

  it('Should wrap `Header` and `MovieList` components into `ErrorBoundary` component:', () => {
    expect(wrapper.find(Header).parents(ErrorBoundary)).toHaveLength(1);
    expect(wrapper.find(MovieList).parents(ErrorBoundary)).toHaveLength(1);
  });
});
