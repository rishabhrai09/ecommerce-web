import React from 'react';
import  ButtonSub from '../button/button.component'
import {connect} from 'react-redux'
import CartItem from './../cart-items/cart-items.component';
import {createStructuredSelector} from 'reselect'
import { selectCartitems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss';

export const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items" >
        {
            cartItems.length?(
            cartItems.map(cartItem=>(
            <CartItem key={cartItem.id}
             item={cartItem}  />)
             )):
            (<span className="empty-message">Your cart is empty</span>)
        }

        </div>
        <ButtonSub >Go To CheckOut </ButtonSub>


    </div>
)

const mapStateToProps= ()=>createStructuredSelector({
    cartItems:selectCartitems
})
export default connect(mapStateToProps)(CartDropdown) 