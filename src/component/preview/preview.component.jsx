import React from 'react'
import Collectionitems from './../collectionItems/collectionitems.component'
import './collectionPreview.styles.scss'
const CollectionPreviwe=({title,items})=>(
    <div className="collection-preview">
        <h1 className="tittle">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((it,idx)=>idx<4).map((item)=>(
         <Collectionitems key={ item.id} item={item}/>
            ))}

        </div>
    </div>
    )
export default CollectionPreviwe
