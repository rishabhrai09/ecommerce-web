import {takeLatest,call,put} from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {firestore,convertCollectionToMap} from '../../firebase/firebase.utilits'
import {fetchCollectionFaliure,fetchCollectionSuccess} from './shop.action'

export function* fetchCollectionAsync(){
    try {
         const collectionRef= firestore.collection('collections');
    const snapshot=yield collectionRef.get()
    const collectionMap = yield call(convertCollectionToMap,snapshot)
    yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionFaliure(error.message))
    }
}


export  function* fetchCollectionStart(){
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}