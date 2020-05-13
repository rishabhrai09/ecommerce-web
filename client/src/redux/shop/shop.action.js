import shopActionTypes from './shop.types' 
import {firestore,convertCollectionToMap} from '../../firebase/firebase.utilits'
 export const fetchCollectionStart=()=>({
type:shopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess=collectionMap=>({
    type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionMap
})

export const fetchCollectionFaliure=errMessage=>({
    type:shopActionTypes.FETCH_COLLECTION_FALIURE,
    payload:errMessage
})
 
 

export const fetchCollectonStartAsync=()=>{
    return dispatch =>{
        const collectionRef= firestore.collection('collections');
        dispatch(fetchCollectionStart())

          collectionRef.get().then(snapshot=>{
          const collectionMap= convertCollectionToMap(snapshot)
           dispatch(fetchCollectionSuccess(collectionMap))
          
}).catch(err=>dispatch(fetchCollectionFaliure(err.message)))
    }
}



