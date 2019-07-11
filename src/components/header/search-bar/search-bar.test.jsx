import React from 'react';
import { shallow } from 'enzyme';

import { SearchBarComponent } from './search-bar';
import { SearchBarStatusLine } from '../search-bar-status-line';

describe('SearchBarComponent component:', () => {
  let wrapper;

  const searchBy = "test";
  const setSearchBy = jest.fn();

  function generateWrapper(passedProps) {
    const defaultProps = {
      searchBy,
      setSearchBy,
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<SearchBarComponent {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.app__header-search-bar')).toHaveLength(1);
  });

  it('Should render `SearchBarStatusLine` without errors:', () => {
    expect(wrapper.find(SearchBarStatusLine)).toHaveLength(1);
  });
});
