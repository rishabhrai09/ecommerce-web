import {createSelector} from 'reselect';

const SelectCart =state=>state.cart;


export const selectCartitems=createSelector(
[SelectCart],
cart=>cart.cartItems
);
export const selectCartHidden= createSelector(
 [SelectCart],
 cart=>cart.hidden
)
export const selectCartitemsCount =createSelector(
    [selectCartitems],
cartItems=> cartItems.reduce((accumlatedQuantity,cartItem)=>accumlatedQuantity+cartItem.quantity,0)
) 

export const selectCartTotal= createSelector(
    [selectCartitems],
    cartItems=> cartItems.reduce((accumlatedQuantity,cartItem)=>accumlatedQuantity+cartItem.quantity *cartItem.price,0)


)