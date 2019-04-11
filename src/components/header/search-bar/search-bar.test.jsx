import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './search-bar';
import { SearchBarStatusLine } from '../search-bar-status-line';

describe('SearchBar component:', () => {
  it('Should render without errors:', () => {
    const wrapper = shallow(
      <SearchBar />
    );

    expect(wrapper.find('.app__header-search-bar')).toHaveLength(1);
  });

  it('Should render `SearchBarStatusLine` without errors:', () => {
    const wrapper = shallow(
      <SearchBar />
    );

    expect(wrapper.find(SearchBarStatusLine)).toHaveLength(1);
  });
});
