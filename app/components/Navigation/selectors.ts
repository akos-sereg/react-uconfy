import { createSelector } from 'reselect';

const selectGlobal = (state: any) => {
  console.log('--> navigation', state.get('navigation'));
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
