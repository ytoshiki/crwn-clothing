import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51GrbJIIbDjD5mQOyuouuNQ6sKqRl9mN6Y5uad1w16PLeHhRiTiRSgKKo39ondwi5QLoWSMAQp5BkGX3gbfz2UEUl00n6FfbBUX"

  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }
  //stripecheckout enable or disable features
  return <StripeCheckout lable='Pay Now' name='CRWN Clohing ltd' billingAddress shippingAddress description={`Your total is $${price}`} amount={priceForStripe} panelLabel='PAY NOW' token={onToken} stripeKey={publishableKey} />
}

export default StripeCheckoutButton
