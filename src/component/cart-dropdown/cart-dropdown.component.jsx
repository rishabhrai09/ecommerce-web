import React from 'react';
import  ButtonSub from '../button/button.component'
import {connect} from 'react-redux'
import CartItem from './../cart-items/cart-items.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom'
//import  CheckOut from '../../pages/checkoutPage/checkoutpage.component'
import { selectCartitems} from '../../redux/cart/cart.selectors';
import {CartToggleHidden} from '../../redux/cart/cart.action'

import './cart-dropdown.styles.scss';


export const CartDropdown =({cartItems,history,dispatch})=>(
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
        <ButtonSub onClick={()=>{
            dispatch(CartToggleHidden())
            history.push('/checkout')
            }} >Go To CheckOut </ButtonSub>


    </div>
)

const mapStateToProps= ()=>createStructuredSelector({
    cartItems:selectCartitems,
    

})
export default withRouter(connect(mapStateToProps)(CartDropdown)) 