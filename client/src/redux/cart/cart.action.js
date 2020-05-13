import {CartActionTypes} from './cart.types';

export const CartToggleHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem=item=>({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})
export const RemoveItem=item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})
export const RemoveItemFromCart=item=>({
    type:CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
})


export const clearCart=()=>({
    type:CartActionTypes.CLEAR_CART
     
})
export default CartToggleHidden;
