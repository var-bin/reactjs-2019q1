import {
  setSortByFilter
} from './set-sort-by-filter';

import {
  setSortByFilterDone
} from './set-sort-by-filter-done';

export function setSortByCreator(filter, setSortByFilterDone) {
  return (dispatch) => {
    dispatch(setSortByFilter());

    setTimeout(() =>
      dispatch(setSortByFilterDone(filter))
    , 2000);
  };
}

export const setSortBy = (filter) => setSortByCreator(
  filter,
  setSortByFilterDone
);
