import React from 'react';
import  ButtonSub from '../button/button.component'
import {connect} from 'react-redux'
import CartItem from './../cart-items/cart-items.component'
import './cart-dropdown.styles.scss';

export const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items" >
        {
            cartItems.map(cartItem=>(
            <CartItem key={cartItem.id} item={cartItem}  />))
        }

        </div>
        <ButtonSub >Go To CheckOut </ButtonSub>


    </div>
)

const mapStateToProps= ({cart:{cartItems}})=>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown) 