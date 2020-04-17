import React from 'react';
import './checkoutItem.styles.scss';
import {RemoveItemFromCart,AddItem,RemoveItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux'


export const CheckOutItem =({cartItem,clearitem ,addItem,removeItem})=>{
    const {name ,imageUrl,price ,quantity}= cartItem
    return(
    < div className="checkout-item">
        <div className="image-container">
       <img className="img" src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name} </span>
        
<span className="quantity"> 
<div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
<span className="value">{quantity}</span> 
<div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>

</span>
<span className="price"> {price}</span>
        <div className="remove-button"  onClick={()=>clearitem(cartItem)}>&#10005; </div>

    </div>
)}
const mapdispatchToProps=dispatch=>({
    clearitem:item=>dispatch(RemoveItemFromCart(item)),
    addItem:item=>dispatch(AddItem(item)),
    removeItem:item=>dispatch(RemoveItem(item))
})
export default  connect(null,mapdispatchToProps)(CheckOutItem)