import React from 'react';
import { shallow } from 'enzyme';

import { Spinner } from './spinner';

describe('(Component) Spinner:', () => {
  const wrapperCSSClass = 'spinner-wrapper';
  const spinnerCSSClass = 'fa-spinner';
  const spinner = shallow(<Spinner />);

  it('should be rendered with no errors', () => {
    expect(spinner.hasClass(wrapperCSSClass)).toBe(true);
  });

  it('should render spinner icon', () => {
    expect(spinner.find('[data-ut-id="spinnerIcon"]').hasClass(spinnerCSSClass)).toBe(true);
  });
});
