import shopActionTypes from './shop.types'
const INTIAL_SATE={
collections:null ,
isFetching:false,
errMessage:undefined  
}

export const shopItemReducer=(state=INTIAL_SATE,action)=>{
   
    switch(action.type){

     case shopActionTypes.FETCH_COLLECTION_START:
         return{
             ...state,
             isFetching:true
         }

        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                collections:action.payload
                
            }
            case shopActionTypes.FETCH_COLLECTION_FALIURE:
                return{
                    ...state,
                    errMessage:action.payload
                }
        default:
            return state;
    }
}
export default shopItemReducer;