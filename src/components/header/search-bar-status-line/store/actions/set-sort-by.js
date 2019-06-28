import {
  setSortByFilter
} from './set-sort-by-filter';

import {
  setSortByFilterDone
} from './set-sort-by-filter-done';

export function setSortBy(filter) {
  return (dispatch) => {
    dispatch(setSortByFilter());

    setTimeout(() => {
      dispatch(setSortByFilterDone(filter));
    }, 2000);
  };
}
