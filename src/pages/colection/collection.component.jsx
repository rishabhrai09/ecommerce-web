import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors'

const CollectionPage=({collection})=>{
    console.log(collection)
    return(

    <div>
        <h1>collection Page</h1>
    </div>
)}


const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.path.collectionId)(state)
})
export default  connect(mapStateToProps)(CollectionPage);