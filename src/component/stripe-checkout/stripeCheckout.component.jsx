import React from  'react'
import StripCheckout from 'react-stripe-checkout';


const StripCheckoutButton=({price})=>{

    const stripePrice= price * 100;
    const publisablekey="pk_test_BI4i2eunsBfaP3ulozZxOYLV00ygCgdnjx";
 const ontoken=token=>{
 console.log(token)
 }

    return(
        <StripCheckout
            label="pay Now"
            name=" ReactJs App "
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discription={`Your total amout is ${<span>&#8377;</span>} ${price}`}
            panelLabel="pay now"
            token={ontoken}
            stripeKey={publisablekey}
        />
    )


}

export default StripCheckoutButton