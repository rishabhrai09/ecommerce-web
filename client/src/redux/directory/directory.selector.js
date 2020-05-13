import {createSelector} from 'reselect'; 
export const selectdirectory=state=>state.directory;


export const selectDirectorySelector=createSelector(
    [selectdirectory],
    directory=>directory.items
)