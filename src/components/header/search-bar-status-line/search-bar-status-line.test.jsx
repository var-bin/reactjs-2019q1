import React from 'react';
import { shallow } from 'enzyme';

import { SearchBarStatusLineComponent} from './search-bar-status-line';

describe('SearchBarStatusLineComponent component:', () => {
  let wrapper;

  const sortBy = "test";
  const setSortByFilter = jest.fn();
  const foundMovies = [];
  const searchMoviesValue = '';

  function generateWrapper(passedProps) {
    const defaultProps = {
      sortBy,
      setSortByFilter,
      foundMovies,
      searchMoviesValue
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<SearchBarStatusLineComponent {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.search-bar-status-line')).toHaveLength(1);
  });
});
