import  userActionTypes from './user.types'
const INITAIL_SATE={
    currentUser:null,
    erorr:null
}

const userReducer= (state=INITAIL_SATE,action)=>{
switch(action.type){
    case userActionTypes.SIGN_IN_SUCCES:
        return{
           ...state,
           currentUser:action.payload,
           erorr:null
        }
        case userActionTypes.SIGN_OUT_SUCCES:
            return{
                ...state,
                currentUser:null,
                error:null 
            }

    case userActionTypes.SIGN_OUT_FAIL:
        case userActionTypes.SIGN_IN_FALIUR:
            case userActionTypes.SIGN_UP_FALIUR:
            return{
                ...state,
                erorr:action.payload

            }

        default:
            return state;
}
}
export default userReducer