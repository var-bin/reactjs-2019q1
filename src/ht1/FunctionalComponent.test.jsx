
import React from 'react';
import { shallow } from 'enzyme';
import { FunctionalComponent } from './FunctionalComponent';

describe('FunctionalComponent: ', () => {
  const text = 'Some text';

  it('Should render the text from props: ', () => {
    const wrapper = shallow(<FunctionalComponent text={text} />);

    expect(wrapper.text()).toEqual(text);
  });
});
