import { combineReducers } from 'redux';

import {
  sortByFilter,
  movies,
  isLoaded,
  searchByFilter
} from './reducers';

export const rootReducer = combineReducers({
  sortByFilter,
  isLoaded,
  movies,
  searchByFilter
});
