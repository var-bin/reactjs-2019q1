import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './error-boundary';

const FakeComponent = () => (<div>I'm a Fake Component!</div>);

const FakeComponentWithErrors = () => {
  throw new Error('Ooops, there is error!');
};

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

    // console.log(wrapper.html());

    expect(wrapper).to.deep.equal([
      error,
      {
        componentStack: `
        in Something (created by ErrorBoundary)
        in ErrorBoundary (created by WrapperComponent)
        in WrapperComponent`
      }
    ]);
  });
});
