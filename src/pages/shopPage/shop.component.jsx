 import React from  'react'
 import  SHOP_DATA from './shop.data.js'
import CollectionPreviwe from './../../component/preview/preview.component'

 export class ShopPage extends React.Component{
     constructor(){
         super()
         this.state={
             collections:SHOP_DATA
         }
     }
 render(){
   const  {collections}=this.state
     return(
         <div>
             {collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreviwe key={id} {...otherCollectionProps}/>
             ))}
         </div>
     )
 }


 }
 export default ShopPage