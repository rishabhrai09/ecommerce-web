import shopActionTypes from './shop.types' 
const upadteCollection=(collectionmap)=>({
type:shopActionTypes.UPDATE_COLLECTION,
payload:collectionmap
})
export default upadteCollection