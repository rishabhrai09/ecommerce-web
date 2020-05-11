import userActionTypes from './user.types'



export const GoogleSignInStart=()=>({
    type:userActionTypes.GOOGLE_SIGN_IN_START,
    
})

export const checkUserSession=()=>({
    type:userActionTypes.CHECK_USER_SESSION
})
export const SignInSucces=user=>({
    type:userActionTypes.SIGN_IN_SUCCES,
    payload:user
})
export const SignInFail=erorr=>({
    type:userActionTypes.SIGN_IN_FALIUR,
    payload:erorr
})

export const emailSignInStart=emailAndPassword=>({
    type:userActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const SignOutStart=()=>({
    type:userActionTypes.SIGN_OUT_START
})
export const SignOutSuccess=()=>({
    type:userActionTypes.SIGN_OUT_SUCCES
})

export const SignOutfail=(error)=>({
    type:userActionTypes.SIGN_OUT_FAIL,
    payload:error
    
})

export const signUpStart=(userCredentails)=>({
    type:userActionTypes.SIGN_UP_START,
    payload:userCredentails
})

export const sigUpsucces=({user,addtionalData})=>({
type:userActionTypes.SIGN_UP_SUCCES,
payload:{user,addtionalData}
})

export const SignUpFail=(error)=>({
    type:userActionTypes.SIGN_UP_FALIUR,
    payload:error
})