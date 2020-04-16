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
