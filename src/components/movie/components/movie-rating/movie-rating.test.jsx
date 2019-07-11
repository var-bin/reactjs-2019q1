import React from 'react';
import { shallow } from 'enzyme';

import { MovieRating } from './movie-rating';

describe('(Component) MovieRating:', () => {
  let wrapper;
  const rating = '123';

  function generateWrapper(passedProps) {
    const defaultProps = {
      rating
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<MovieRating {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  it('should render the right rating value', () => {
    const text = wrapper.find('[data-ut-id="movieRatingCount"]').text();

    expect(text).toEqual(rating);
  });
});
