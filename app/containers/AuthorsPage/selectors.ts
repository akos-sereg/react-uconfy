import { createSelector } from 'reselect';

const selectGlobal = (state: any) => state.get('authors');

const makeSelectAuthors = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'authors'])
);

export {
  selectGlobal,
  makeSelectAuthors
};
