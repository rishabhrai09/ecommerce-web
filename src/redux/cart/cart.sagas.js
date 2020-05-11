import {takeLatest,all,put,call} from 'redux-saga/effects';
import {clearCart} from './cart.action';
import userActionTypes from '../user/user.types';

export function* onClearCrt(){
    yield put(clearCart())
}


export function* onSignOutsucces(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCES,onClearCrt)
}

export function* cartSagas(){
    yield all([call(onSignOutsucces)])
}