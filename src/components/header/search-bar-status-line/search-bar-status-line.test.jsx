import React from 'react';
import { shallow } from 'enzyme';

import { SearchBarStatusLineComponent} from './search-bar-status-line';

describe('SearchBarStatusLineComponent component:', () => {
  let wrapper;

  const sortBy = "test";
  const setSortByFilter = jest.fn();
  const foundMovies = [];
  const searchMoviesValue = '';

  function generateWrapper(passedProps) {
    const defaultProps = {
      sortBy,
      setSortByFilter,
      foundMovies,
      searchMoviesValue
    };

    const props = Object.assign({}, defaultProps, passedProps);

    return shallow(<SearchBarStatusLineComponent {...props} />);
  }

  beforeEach(() => {
    wrapper = generateWrapper();
  });

  describe('Default behavior', () => {
    it('should render without errors:', () => {
      expect(wrapper.find('.search-bar-status-line')).toHaveLength(1);
    });

    it('should not render info related to searching result:', () => {
      expect(wrapper.find('[data-ut-id="foundMoviesInfo"]')).toHaveLength(0);
    });
  });

  describe('Info related to searching result', () => {
    it('should render rigth text for more than one movie: ', () => {
      const expected = '2 movies found';

      wrapper = generateWrapper({
        searchMoviesValue: 'test',
        foundMovies: ['movie 1', 'movie 2']
      });

      const foundMoviesInfo = wrapper.find('[data-ut-id="foundMoviesInfo"]').text();

      expect(foundMoviesInfo).toEqual(expected);
    });

    it('should render rigth text for one movie: ', () => {
      const expected = '1 movie found';

      wrapper = generateWrapper({
        searchMoviesValue: 'test',
        foundMovies: ['movie 1']
      });

      const foundMoviesInfo = wrapper.find('[data-ut-id="foundMoviesInfo"]').text();

      expect(foundMoviesInfo).toEqual(expected);
    });
  });
});
