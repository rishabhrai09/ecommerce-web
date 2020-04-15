
import React from 'react';
import './cart-items.styles.scss';
 export const CartItem=({item:{imageUrl,price,name,quantity}})=>(
<div className="cart-item">
    
        <img src={imageUrl} alt="cartitem"/>
        <div className="item-details">
 <span className="name">{name}</span>
 <span className="price"> {quantity} x &#x20B9;{price} </span>

        

        </div> 

</div>
 )
 export default CartItem