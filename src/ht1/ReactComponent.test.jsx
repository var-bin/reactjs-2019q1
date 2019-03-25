import React from 'react';
import { shallow } from 'enzyme';
import { ReactComponent } from './ReactComponent';

describe('ReactComponent component: ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReactComponent />);
  });

  it('Should render the right text: ', () => {
    expect(wrapper.text()).toEqual('Welcome');
  });

  it('Should render h2 tag: ', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
});
