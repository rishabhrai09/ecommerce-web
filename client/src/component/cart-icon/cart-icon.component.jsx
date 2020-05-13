import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {CartToggleHidden} from '../../redux/cart/cart.action';
import { selectCartitemsCount} from '../../redux/cart/cart.selectors'
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
const mapStateToProps=()=>createStructuredSelector
({
    itemCount:selectCartitemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)

