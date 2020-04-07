import React from 'react'
import Collectionitems from './../collectionItems/collectionitems.component'
import './collectionPreview.styles.scss'
const CollectionPreviwe=({title,items})=>(
    <div className="collection-preview">
        <h1 className="tittle">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((it,idx)=>idx<4). map(({id,...otherItemsProps})=>(
         <Collectionitems key={id} {...otherItemsProps}/>
            ))}

        </div>
    </div>
    )
export default CollectionPreviwe
