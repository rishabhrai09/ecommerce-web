import React from 'react'
import CollectionPreviwe from '../../component/preview/collectionPreview.component';
import {connect} from 'react-redux';
import {selectCollectionPreviwe} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect'


const CollectionOverview=({collections})=>(

    <div className="collection-overview">
         {collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreviwe key={id} {...otherCollectionProps}/>
             ))}

    </div>
) 

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionPreviwe
})

export default connect(mapStateToProps)(CollectionOverview)