import CartActionTypes from './cart.types';
import {addItemToCart,cartItemtoRemove} from './cart.utilites'
const INITIAL_STATE={
hidden:true,
cartItems:[]
}
 
export const CartReducer=(state=INITIAL_STATE,action)=>{
 switch(action.type){
     case CartActionTypes.TOGGLE_CART_HIDDEN :
         return{
             ...state,
             hidden:!state.hidden
         };
         case CartActionTypes.ADD_ITEMS:
     return{
         ...state,
         cartItems:addItemToCart(state.cartItems,action.payload)
     }
     case CartActionTypes.REMOVE_ITEM:
     return{
         ...state,
         cartItems:cartItemtoRemove(state.cartItems,action.payload)

     }
     case CartActionTypes.REMOVE_ITEM_FROM_CART:
     return{
...state,
cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
     }
     case CartActionTypes.CLEAR_CART:
         return{
             ...state,
             cartItems:[]
         }
default :
return state
 }


}
export default CartReducer