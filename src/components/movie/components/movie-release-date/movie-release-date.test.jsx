import React from 'react';
import { shallow } from 'enzyme';

import { MovieReleaseDate } from './movie-release-date';

describe('(Component) MovieReleaseDate:', () => {
  let wrapper;
  const releaseDate = '123';

  function generateWrapper(passedProps) {
    const defaultProps = {
      releaseDate
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<MovieReleaseDate {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  it('should render the right release date value', () => {
    const text = wrapper.find('[data-ut-id="movieReleaseDate"]').text();

    expect(text).toEqual(releaseDate);
  });

  it('should pass the right value to `time`', () => {
    const {dateTime} = wrapper.find('time').props();

    expect(dateTime).toEqual(releaseDate);
  });
});
