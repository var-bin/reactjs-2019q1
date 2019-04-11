import React from 'react';
import { shallow } from 'enzyme';

import { SearchBarStatusLine } from './search-bar-status-line';

describe('SearchBarStatusLine component:', () => {
  it('Should render without errors:', () => {
    const wrapper = shallow(
      <SearchBarStatusLine />
    );

    expect(wrapper.find('.search-bar-status-line')).toHaveLength(1);
  });
});
