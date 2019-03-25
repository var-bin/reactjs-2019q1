import React from 'react';
import { shallow } from 'enzyme';
import { CreateElement } from './CreateElement';

describe('CreateElement component: ', () => {
  it('Should render the right text: ', () => {
    const wrapper = shallow(<CreateElement />);

    expect(wrapper.text()).toEqual('Hello, world!');
  });
});
