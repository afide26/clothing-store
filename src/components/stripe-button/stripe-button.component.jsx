import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
  // Price needs to be in cents for Stripe to process the payments
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_5xI36RbMtlxKK2v07mIibAvJ005coABAQR";
  const onToken = token=>{
    console.log(token);
    alert("Payment Successful!")
  }
  return(
    <StripeCheckout
    label="Pay Now"
    name="React Clothing Store"
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;