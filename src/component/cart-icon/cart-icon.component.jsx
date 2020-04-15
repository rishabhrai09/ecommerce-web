import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg';
import {connect} from 'react-redux'
import {CartToggleHidden} from '../../redux/cart/cart.action';
import './cart-icon.styles.scss'

export const ShoppingCart=({CartToggleHidden ,itemCount})=>(
<div className="cart-icon" onClick={CartToggleHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>

</div>

)
const mapDispatchToProps=dispatch=>({
 CartToggleHidden:()=>dispatch(CartToggleHidden())
})
const mapStateToProps=({cart:{cartItems}})=>
({
    itemCount:cartItems.reduce((accumlatedQuantity,cartItem)=>accumlatedQuantity+cartItem.quantity,0)
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)

