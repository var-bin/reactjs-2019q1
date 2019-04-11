import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './search-bar';

describe('SearchBar component: ', () => {
  it('Should render', () => {
    const wrapper = shallow(
      <SearchBar />
    );

    expect(wrapper.find('.app__header-search-bar')).toHaveLength(1);
  });
});
