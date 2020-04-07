import React from 'react'
 import './collectionitems.styles.scss'

 const Collectionitems=({id,name,price,imageUrl})=>(
     <div className="collectionitems">
         <div
         className="image"
         style={{
             backgroundImage:`url(${imageUrl})`
         }}
         />
   <div className="collection-footer">
   <span className="name">{name}</span>
   <span className="price">{price}</span>

   </div>
     </div>
 )
 export default Collectionitems