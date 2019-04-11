import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './error-boundary';

const FakeComponent = () => (
  <div>
    I am a Fake Component!
  </div>
);

describe('ErrorBoundary component: ', () => {
  it('Should render children if there isn\'t any error', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <FakeComponent />
      </ErrorBoundary>
    );

    expect(wrapper.is(FakeComponent)).toBeTruthy();
  });

  it('Should show error message', () => {
    const error = new Error('hi!');
    const wrapper = shallow(
      <ErrorBoundary>
        <FakeComponent />
      </ErrorBoundary>
    );

    wrapper.find(FakeComponent).simulateError(error);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
