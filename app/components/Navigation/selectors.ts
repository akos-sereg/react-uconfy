import { createSelector } from 'reselect';

const selectGlobal = (state: any) => {
  return state.get('navigation');
}

const makeNavigationPathSelector = () => createSelector(
  selectGlobal,
  (globalState) => globalState.navigationPath
);

export {
  selectGlobal,
  makeNavigationPathSelector
};
