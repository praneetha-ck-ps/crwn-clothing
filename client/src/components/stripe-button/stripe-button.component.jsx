import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51KNyNzSGd0xjKsY8cSREb0Kqp0MHz4Iwd33fHt8qaEhwwGeA64vtTXqDrIX14EUMKIKKBidvH1KmlEDTk5rIoktg00KnMrrmx7";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("payment successful");
      })
      .catch((err) => {
        console.log("Payment error", err, JSON.parse(err));
        alert(
          "There was an issue with payment. Please sure you use provided card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
