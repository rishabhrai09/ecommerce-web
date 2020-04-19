import React from 'react'
import CollectionPreviwe from '../../component/preview/preview.component';
import {connect} from 'react-redux';
import {ShopSelectorsItems} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect'


const CollectionOverview=({collections})=>(

    <div className="collection-overview">
         {collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreviwe key={id} {...otherCollectionProps}/>
             ))}

    </div>
) 

const mapStateToProps=createStructuredSelector({
    collections:ShopSelectorsItems
})

export default connect(mapStateToProps)(CollectionOverview)