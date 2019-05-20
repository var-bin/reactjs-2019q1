import { combineReducers } from 'redux';

import {
  searchByFilter,
  sortByFilter,
  isFetching,
  movies
} from './reducers';

export const rootReducer = combineReducers({
  searchByFilter,
  sortByFilter,
  movies,
  isFetching
});
