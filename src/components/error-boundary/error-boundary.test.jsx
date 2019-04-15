import React from 'react';
import { shallow } from 'enzyme';

import { ErrorBoundary } from './error-boundary';

const FakeComponent = () => (
  <div>
    I am a Fake Component!
  </div>
);

describe('ErrorBoundary component:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ErrorBoundary>
        <FakeComponent />
      </ErrorBoundary>
    );
  });

  it('Should render children if there isn\'t any error:', () => {
    expect(wrapper.is(FakeComponent)).toBeTruthy();
  });

  it('Should show error message:', () => {
    const error = new Error('hi!');

    wrapper.find(FakeComponent).simulateError(error);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
