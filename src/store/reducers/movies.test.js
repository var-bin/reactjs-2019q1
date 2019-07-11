import {
  SET_SORT_BY_FILTER_DONE,
  RECEIVE_MOVIES
} from 'app-store/action-types';

import { moviesData } from 'app-mocks';

import { SORT_BY } from 'app-constants';

import { movies } from './movies';

describe('(Reducer) movies', () => {
  it('should return the initial state', () => {
    const expected = [];

    expect(movies(undefined, {})).toEqual(expected);
  });

  it('should handle `RECEIVE_MOVIES` action', () => {
    expect(movies(undefined, {
      type: RECEIVE_MOVIES,
      payload: {
        movies: {
          data: moviesData
        }
      }
    })).toEqual(moviesData);
  });

  describe('`SET_SORT_BY_FILTER_DONE` action', () => {
    const state = [{
      id: 'id1',
      title: 'title1',
      release_date: '2018-02-07',
      vote_count: 1195
    }, {
      id: 'id2',
      title: 'title2',
      release_date: '2016-02-11',
      vote_count: 6795
    }, {
      id: 'id3',
      title: 'title3',
      release_date: '2017-10-25',
      vote_count: 3619
    }];

    it('should sort by release date', () => {
      const expected = [{
        id: 'id1',
        title: 'title1',
        release_date: '2018-02-07',
        vote_count: 1195
      }, {
        id: 'id3',
        title: 'title3',
        release_date: '2017-10-25',
        vote_count: 3619
      }, {
        id: 'id2',
        title: 'title2',
        release_date: '2016-02-11',
        vote_count: 6795
      }];

      expect(movies(state, {
        type: SET_SORT_BY_FILTER_DONE,
        payload: {
          filter: SORT_BY.RELEASE_DATE
        }
      })).toEqual(expected);
    });

    it('should sort by vote count', () => {
      const expected = [{
        id: 'id2',
        title: 'title2',
        release_date: '2016-02-11',
        vote_count: 6795
      }, {
        id: 'id3',
        title: 'title3',
        release_date: '2017-10-25',
        vote_count: 3619
      }, {
        id: 'id1',
        title: 'title1',
        release_date: '2018-02-07',
        vote_count: 1195
      }];

      expect(movies(state, {
        type: SET_SORT_BY_FILTER_DONE,
        payload: {
          filter: SORT_BY.RATING
        }
      })).toEqual(expected);
    });
  });
});
