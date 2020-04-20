import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux'
import {SelectCollection} from '../../redux/shop/shop.selectors';
import Collectionitems from '../../component/collectionItems/collectionitems.component'

const CollectionPage=({collection})=>{
    console.log(collection)
    const {title,items} = collection;
    return(

    <div className="collection-page"> 
    <h2 className="title">{title}</h2>
   <div className="items">{
        items.map(item=> <Collectionitems key={item.id} item={item} />)
    }
        </div> 
    </div>
)
}


const mapStateToProps=(state,ownProps)=>({
    collection:SelectCollection(ownProps.match.params.collectionId)(state)
})
export default  connect(mapStateToProps)(CollectionPage);