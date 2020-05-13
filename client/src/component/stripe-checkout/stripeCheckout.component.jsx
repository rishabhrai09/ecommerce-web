import React from  'react'
import StripCheckout from 'react-stripe-checkout';
import axios from 'axios'


const StripCheckoutButton=({price})=>{

    const stripePrice= price * 100;
    const publisablekey="pk_test_BI4i2eunsBfaP3ulozZxOYLV00ygCgdnjx";
 const ontoken=token=>{
 axios({
     url:'payment',
     method:'post',
     data:{
         amount:stripePrice,
         token
     }
 }).then(response=>{
     alert("payment Successful")
 }).catch(error=>{
     console.log("payment error:",JSON.parse(error));
     alert("There is issue with payment,pleaseuse the provided card")
 })
 }

    return(
        <StripCheckout
            label="pay Now"
            name=" ReactJs App "
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discription={`Your total amout is ${<span>&#8377;</span>} ${stripePrice}`}
            panelLabel="pay now"
            token={ontoken}
            stripeKey={publisablekey}
        />
    )


}

export default StripCheckoutButton