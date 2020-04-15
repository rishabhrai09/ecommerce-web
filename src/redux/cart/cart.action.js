import {CartActionTypes} from './cart.types';

export const CartToggleHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const AddItem=item=>({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})
export default CartToggleHidden;
