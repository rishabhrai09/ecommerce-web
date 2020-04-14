import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg';
import {connect} from 'react-redux'
import {CartToggleHidden} from '../../redux/cart/cart.action';
import './cart-icon.styles.scss'

export const ShoppingCart=({CartToggleHidden})=>(
<div className="cart-icon" onClick={CartToggleHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>

</div>

)
const mapDispatchToProps=dispatch=>({
 CartToggleHidden:()=>dispatch(CartToggleHidden())
})

export default connect(null,mapDispatchToProps)(ShoppingCart)

