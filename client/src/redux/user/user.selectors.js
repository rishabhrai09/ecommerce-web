import { createSelector} from 'reselect';

export const selectUser=state=>state.user;
 
 export const selecetCurrentUser=createSelector(
     [selectUser],
     user=>user.currentuser
 ) 