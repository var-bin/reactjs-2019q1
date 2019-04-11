import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header';
import { SearchBar } from './search-bar';

describe('Header component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });

  it('Should render without errors:', () => {
    expect(wrapper.find('.app__header')).toHaveLength(1);
  });

  it('Should render `SearchBar` without errors:', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
});
