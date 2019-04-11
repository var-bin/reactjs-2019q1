import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './search-bar';
import { SearchBarStatusLine } from '../search-bar-status-line';

describe('SearchBar component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchBar />
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.app__header-search-bar')).toHaveLength(1);
  });

  it('Should render `SearchBarStatusLine` without errors:', () => {
    expect(wrapper.find(SearchBarStatusLine)).toHaveLength(1);
  });
});
