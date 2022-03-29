import { RootState } from 'MyTypes';
// import { createSelector } from 'reselect';

export const getDevices = (state: RootState) => {
    return state.devices.devices;
}
export const getArticles = (state: RootState) => state.articles.articles;

