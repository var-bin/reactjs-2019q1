import {
  REQUEST_MOVIES
} from 'app-store/action-types';

import { requestMovies } from './request-movies';

describe('(Actions) requestMovies:', () => {
  it('Should create an action to request movies', () => {
    const expectedAction = {
      type: REQUEST_MOVIES,
    };

    expect(requestMovies()).toEqual(expectedAction);
  });
});
