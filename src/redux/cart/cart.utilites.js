
export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingcartItem=cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id
        );

        if(existingcartItem){
            return cartItems.map(cartItem=>
                cartItem.id===cartItemToAdd.id
                ?{...cartItem,quantity:cartItem.quantity+1}
                :cartItem
                )
        }
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}



export const cartItemtoRemove=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id ===cartItemToRemove.id)

    if(existingCartItem.quantity===1){
       return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)

    }
    return cartItems.map(cartItem=>cartItem.id ===cartItemtoRemove.id ?{...cartItem,quantity:cartItem.quantity-1}:cartItem)

    
}
export default addItemToCart;