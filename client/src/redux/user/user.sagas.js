import {takeLatest,put,call,all} from 'redux-saga/effects';
import userActionTypes from './user.types';
import { Googleprovider,auth,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utilits';
import {SignInSucces, SignInFail,SignOutSuccess,SignOutfail ,sigUpsucces,SignUpFail} from './user.actions';




 function* getSnapShotFromUserAuth(UserAuth,addtionalData){

    try {
        const userRef=yield call(createUserProfileDocument,UserAuth,addtionalData)
        const userSnapshot=yield userRef.get()
        yield put(SignInSucces({id:userSnapshot.id , ...userSnapshot.data()}))
    } catch (error) {
        yield put(SignInFail(error))
    }
 }

export function* signInWithGoogle(){
 
    try {
        const {user}= yield auth.signInWithPopup(Googleprovider)
     yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFail(error))
    }
}



export function* onGoogleSinginStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
    
}

export function* EmailSignInStart({payload:{email,password}}){
    try {
        const {user}= yield auth.signInWithEmailAndPassword(email,password)
      yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFail(error))
    }

}
export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,EmailSignInStart)
}
export function* isUserAutenticated(){
    try {
        const userAuth= yield getCurrentUser()
        if(!userAuth) return;
     yield getSnapShotFromUserAuth(userAuth)
     
        
    } catch (error) {
        yield put(SignInFail(error))
    }
}

export function* signUp({payload:{email,password,displayName}}){
    try {
        const {user}= yield auth.createUserWithEmailAndPassword(email,password);
       yield put(sigUpsucces({user,addtionalData:{displayName}}))
        
    } catch (error) {
       yield  put(SignUpFail(error))
    }
}
export function* signInAfterSignUp({payload:{user,addtionalData}}){
    yield getSnapShotFromUserAuth(user,addtionalData)
     
}
export function* signOut(){
    try {
        yield auth.signOut()
        yield put(SignOutSuccess())
    } catch (error) {
        yield put(SignOutfail(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAutenticated)
}

export function* onSignoutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}
export function* signUpSucces(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCES,signInAfterSignUp)
}

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}

export function* userSaga(){
    yield all([call(onGoogleSinginStart),
        call(onEmailSignInStart),
        call(onCheckUserSession) ,
        call(onSignoutStart),
        call(onSignUpStart),
        call(signUpSucces)
    ])
}