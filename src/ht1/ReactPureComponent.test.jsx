import React from 'react';
import { shallow } from 'enzyme';
import { ReactPureComponent } from './ReactPureComponent';

describe('ReactPureComponent component: ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReactPureComponent />);
  });

  it('Should render some text: ', () => {
    expect(wrapper.text()).not.toHaveLength(0);
  });

  it('Should render p tag: ', () => {
    expect(wrapper.find('p').exists()).toBeTruthy();
  });
});
