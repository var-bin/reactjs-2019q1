import { combineReducers } from 'redux';

import {
  sortByFilter,
  movies,
  isFetching,
  searchByFilter
} from './reducers';

export const rootReducer = combineReducers({
  sortByFilter,
  isFetching,
  movies,
  searchByFilter
});
