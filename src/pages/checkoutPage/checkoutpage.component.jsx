import React from 'react';
import './checkoutpage.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect'
import { selectCartitems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../component/checkout-item/checkoutItem.component'

 export const CheckOutPage= ({cartItems,total})=>(
     <div className="checkout-page">
         <div className="checkout-header">
             <div className="header-block">
           <span>Product</span>
             </div>
             <div className="header-block">
           <span>Discription</span>
             </div>
             <div className="header-block">
           <span>Quantity</span>
             </div>
             <div className="header-block">
           <span>Price</span>
             </div>
             <div className="header-block">
           <span>Remove</span>
             </div>
            

         </div>

     
         {
                 cartItems.map(cartItem=> 
                 <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
             }
  <span> Total: &#x20B9;{total}</span>
     </div>
 )
 const mapStateToProps=createStructuredSelector({
     cartItems:selectCartitems,
     total:selectCartTotal
 })
 export default connect(mapStateToProps)(CheckOutPage)