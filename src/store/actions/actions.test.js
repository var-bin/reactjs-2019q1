import {
  SET_SEARCH_BY_FILTER,
  ADD_MOVIE_TO_FAVORITE,
  REMOVE_MOVIE_FROM_FAVORITE,
} from '../action-types';

import {
  setSearchByFilter,
  addMovieToFavorite,
  removeMovieFromFavorite
} from './actions';

describe('Actions', () => {
  describe('(action) setSearchByFilter', () => {
    it('Should return right type', () => {
      const {type} = setSearchByFilter('test');


      expect(type).toEqual(SET_SEARCH_BY_FILTER);
    });

    it('Should return right filter', () => {
      const {payload} = setSearchByFilter('tttt');

      expect(payload.filter).toEqual('tttt');
    });
  });
});
