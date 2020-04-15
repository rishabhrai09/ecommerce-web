import React from 'react'
import {connect} from 'react-redux';
import {AddItem} from '../../redux/cart/cart.action';
 import './collectionitems.styles.scss'
 import ButtonSub from './../button/button.component'

 const Collectionitems=( { item,AddItem})=>{
     const {name,price,imageUrl}=item
     return(
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
   <ButtonSub onClick={()=>AddItem(item)} inverted>ADD TO CART</ButtonSub>
     </div>
 )
        }
 const mapDispatchToProps=dispatch=>({
    AddItem:item=>dispatch(AddItem(item))
 })
 export default connect(null,mapDispatchToProps)(Collectionitems)