import shopActionTypes from './shop.types'
const INTIAL_SATE={
collections:null   
}

export const shopItemReducer=(state=INTIAL_SATE,action)=>{
   
    switch(action.type){
        case shopActionTypes.UPDATE_COLLECTION:
            return{
                ...state,
                collections:action.payload
                
            }
        default:
            return state;
    }
}
export default shopItemReducer;