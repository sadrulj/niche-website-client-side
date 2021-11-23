import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jxz1KHRSEPxAiCHyWdwnGB4xadWrotGuTCT0zUWZLt8CSOuIWNyHJlduSlitfqOADRrZQvxleKcL83s4EmgtLHa00QPiaEbOJ"
);

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const Pay = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);
  return (
    <div>
      <h2>Please Pay for: {order.productCode}</h2>
      <h3>Titel: {order.title}</h3>
      <h4>Pay: ${order.price}</h4>
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm order={order} />
      </Elements>
    </div>
  );
};

export default Pay;
