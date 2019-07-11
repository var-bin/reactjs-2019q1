import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  SET_SORT_BY_FILTER,
  SET_SORT_BY_FILTER_DONE
} from 'app-store/action-types';

import { setSortByCreator } from './set-sort-by';

describe('(Actions) setSortBy:', () => {
  jest.useFakeTimers();

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('Should dispatch actions with right args', () => {
    const filter = 'filter';
    const expectedActions = [
      { type: SET_SORT_BY_FILTER },
      { type: SET_SORT_BY_FILTER_DONE }
    ];
    const setSortByFilterDone = jest.fn().mockImplementation(() => ({
      type: SET_SORT_BY_FILTER_DONE,
      payload: {
        filter
      }
    }));
    const store = mockStore({ filter: '' });

    store.dispatch(setSortByCreator(filter, setSortByFilterDone));
    jest.runAllTimers();

    const { payload } = store.getActions()[1];

    expect(store.getActions()).toMatchObject(expectedActions);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(setSortByFilterDone).toBeCalled();
    expect(setSortByFilterDone).toHaveBeenLastCalledWith(filter);
    expect(payload.filter).toEqual(filter);
  });
});
